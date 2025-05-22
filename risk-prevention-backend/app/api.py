import os
import requests
import certifi
import urllib3
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from dotenv import load_dotenv

load_dotenv()

urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

router = APIRouter()

OPENWEATHER_API_KEY = os.getenv("OPENWEATHER_API_KEY")
GROQ_API_KEY = os.getenv("GROQ_API_KEY")

class RiskAdviceRequest(BaseModel):
    location: str
    property_type: str

@router.post("/get-risk-advice")
def get_risk_advice(request: RiskAdviceRequest):
    location = request.location
    property_type = request.property_type

    if not OPENWEATHER_API_KEY or not GROQ_API_KEY:
        raise HTTPException(status_code=500, detail="API keys not configured properly")

    # Fetch weather data
    weather_url = f"http://api.openweathermap.org/data/2.5/weather?q={location}&appid={OPENWEATHER_API_KEY}"
    weather_response = requests.get(weather_url, timeout=5)

    if weather_response.status_code != 200:
        raise HTTPException(status_code=weather_response.status_code, detail="Failed to fetch weather data")

    weather_data = weather_response.json()
    weather_description = weather_data["weather"][0]["description"]

    prompt = (
        f"As an insurance advisor, provide 3 actionable tips to prevent property damage. "
        f"Context: A {weather_description} is predicted in {location}. "
        f"The property type is {property_type}."
    )

    headers = {
        "Authorization": f"Bearer {GROQ_API_KEY}",
        "Content-Type": "application/json"
    }

    payload = {
        "model": "llama-3.3-70b-versatile",  # You can change this to another GROQ-supported model
        "messages": [
            {"role": "system", "content": "You are a helpful insurance advisor."},
            {"role": "user", "content": prompt}
        ]
    }

    try:
        response = requests.post(
            "https://api.groq.com/openai/v1/chat/completions",
            headers=headers,
            json=payload,
            timeout=10,
            verify=False  # ⚠️ TEMPORARY: disables SSL verification
        )
        print("GROQ response:", response.status_code, response.text)
        response.raise_for_status()
        advice = response.json()["choices"][0]["message"]["content"]
    except Exception as e:
        print("Error during GROQ API call:", str(e))
        raise HTTPException(status_code=500, detail="Failed to get response from GROQ")

    return {
        "location": location,
        "property_type": property_type,
        "weather": weather_description,
        "advice": advice
    }
