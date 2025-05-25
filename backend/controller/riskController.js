import fetch from 'node-fetch';

export const getRiskAdvice = async (req, res) => {
  const {
    location,
    pincode,
    address,            // Add this
    property_type,
    property_value,
    property_age,
  } = req.body;

  const { GROQ_API_KEY, OPENWEATHER_API_KEY } = process.env;

  if (!GROQ_API_KEY || !OPENWEATHER_API_KEY) {
    return res.status(500).json({ error: 'API keys missing' });
  }

  try {
    // Fetch weather data
    const weatherRes = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${OPENWEATHER_API_KEY}&units=metric`
    );

    if (!weatherRes.ok) {
      throw new Error('Failed to fetch weather data');
    }

    const weatherData = await weatherRes.json();
    const temperature = weatherData.main.temp;
    const weatherDesc = weatherData.weather[0].description;

    console.log(temperature)
    console.log(weatherDesc)

    // Update prompt to include address
    const prompt = `
You are an expert insurance advisor with deep knowledge of property insurance, risk assessment, weather impacts, and maintenance best practices. Based solely on the following precise property details, generate a comprehensive, accurate, and data-driven report focused strictly on this property and its immediate surroundings.

Use the exact inputs provided — Location, Pincode, Address, Property Type, Property Value, and Property Age — to tailor your analysis. Do not include any generic, unrelated, or speculative information. Your response should be factual, relevant, and actionable for the property owner.

Here are the exact property details to consider:
- Location: ${location}
- Pincode: ${pincode}
- Address: ${address}
- Property Type: ${property_type}
- Property Value: ₹${property_value}
- Property Age: ${property_age} years
- Current Temperature (in °C): ${temperature},
- Current Weather Condition: ${weatherDesc}  

Your output must follow this exact format and structure without deviation:

1. Weather Report:  
- Temperature (in °C): ${temperature}
- Weather Condition: ${weatherDesc}
- Four specific Weather Alerts or Precautionary Tips relevant to the property's location and weather patterns (e.g., flood risks, storm warnings, heat advisories).

2. Property & Insurance Information:  
- Property Value: Restate the value of the property.  
- Property Type: State the property type clearly (e.g., Apartment, Villa, Office).  
- Pincode: Include the pincode.  
- Estimated Insurance Premium: Provide a realistic premium estimate based on the property details and local risk factors.  
- Available Insurance Plans: List at least three insurance plans, each with:  
  - Plan Name  
  - Price  
  - Three clear and concise benefits that the plan offers, specifically tailored to risks identified for this property and its location.

3. Risk Assessment:  
- Risk Zone Type: Categorize the risk level (Low, Medium, High) based on local data and property specifics.  
- Key Risk Factors: List the main risk factors affecting this property’s area (e.g., flooding, earthquakes, storms).  
- Possible Future Calamities: Identify potential natural or man-made calamities likely to impact the property based on location and historical data.

4. Maintenance Tips:  
- Provide four specific, practical, and prioritized maintenance tips to help the property owner reduce risk and maintain property value, directly linked to identified risk factors and weather conditions.

Important:  
- Keep the language clear, professional, and easily understandable by a typical property owner.  
- Avoid vague statements, generalities, or unrelated information.  
- Use bullet points or numbered lists to maintain readability and structure.  
- Ensure the entire report strictly pertains to the provided inputs, with no assumptions beyond the given data.

Generate the report now.

`;

    // Fetch AI response
    const aiRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama3-70b-8192',
        temperature: 0,
        messages: [
          { role: 'system', content: 'You are a helpful insurance advisor.' },
          { role: 'user', content: prompt }
        ]
      })
    });

    if (!aiRes.ok) {
      throw new Error('Failed to fetch AI advice');
    }

    const aiData = await aiRes.json();
    const advice = aiData.choices[0].message.content;

    res.json({
      location,
      pincode,
      address,            // Return address in response
      property_type,
      property_value,
      property_age,
      temperature,
      weather: weatherDesc,
      advice
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};
