import React, { useState } from 'react';
import { Container, Box } from '@mui/material';

import ResultCards from './components/resultCard';
import LandingHeader from './components/landingHeader';
import PropertyDetails from './components/propertyDetails';
import RiskIQBar from './components/riskIqBar';
import Footer from './components/footer';

function App() {
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [propertyValue, setPropertyValue] = useState('');
  const [propertyAge, setPropertyAge] = useState('');
  const [pincode, setPincode] = useState('');
  const [address, setAddress] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Split report parts states
  const [weatherReport, setWeatherReport] = useState('');
  const [propertyInfo, setPropertyInfo] = useState('');
  const [riskAssessment, setRiskAssessment] = useState('');
  const [maintenanceTips, setMaintenanceTips] = useState('');

const parseReport = (report) => {
  const weatherPart = report.match(/1\. Weather Report:\s*(.*?)\s*2\./s);
  const propertyPart = report.match(/2\. Property & Insurance Information:\s*(.*?)\s*3\./s);
  const riskPart = report.match(/3\. Risk Assessment:\s*(.*?)\s*4\./s);
  const maintenancePart = report.match(/4\. Maintenance Tips:\s*(.*)/s);

  setWeatherReport(weatherPart ? weatherPart[1].trim() : '');
  setPropertyInfo(propertyPart ? propertyPart[1].trim() : '');
  setRiskAssessment(riskPart ? riskPart[1].trim() : '');
  setMaintenanceTips(maintenancePart ? maintenancePart[1].trim() : '');
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setWeatherReport('');
    setPropertyInfo('');
    setRiskAssessment('');
    setMaintenanceTips('');

    try {
      const response = await fetch('http://localhost:5000/api/risk/info', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
  location,
  pincode,
  address,           // NEW field added here
  property_type: propertyType,
  property_value: propertyValue,
  property_age: propertyAge,
}),
      });

      const data = await response.json();

      if (response.ok) {
        parseReport(data.advice); // parse the comprehensive report text
      } else {
        setError(data.detail || 'Something went wrong.');
      }
    } catch (err) {
      setError('Failed to connect to the server.');
    }
    setLoading(false);
  };

  return (
    <Box>
      <LandingHeader />

      <Container maxWidth="lg">
        <PropertyDetails
  location={location}
  setLocation={setLocation}
  propertyType={propertyType}
  setPropertyType={setPropertyType}
  propertyValue={propertyValue}
  setPropertyValue={setPropertyValue}
  propertyAge={propertyAge}
  setPropertyAge={setPropertyAge}
  pincode={pincode}
  setPincode={setPincode}
  address={address}             // NEW prop
  setAddress={setAddress}       // NEW prop
  onSubmit={handleSubmit}
/>


        <RiskIQBar protectedPercent={40} threatPercent={60} />

        <ResultCards
          loading={loading}
          error={error}
          weatherReport={weatherReport}
          propertyInfo={propertyInfo}
          riskAssessment={riskAssessment}
          maintenanceTips={maintenanceTips}
        />
      </Container>

      <Footer />
    </Box>
  );
}

export default App;
