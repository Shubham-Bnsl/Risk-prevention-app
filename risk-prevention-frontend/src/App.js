// import React, { useState } from 'react';

// function App() {
//   const [location, setLocation] = useState('');
//   const [propertyType, setPropertyType] = useState('');
//   const [advice, setAdvice] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setAdvice('');

//     try {
//       const response = await fetch('http://127.0.0.1:8000/get-risk-advice', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ location, property_type: propertyType }),
//       });

//       const data = await response.json();
//       setAdvice(data.advice);
//     } catch (error) {
//       setAdvice('Error fetching advice. Please try again.');
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="App">
//       <h1>AI Risk Prevention Advice</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Location:
//           <input
//             type="text"
//             value={location}
//             onChange={(e) => setLocation(e.target.value)}
//             required
//           />
//         </label>
//         <label>
//           Property Type:
//           <input
//             type="text"
//             value={propertyType}
//             onChange={(e) => setPropertyType(e.target.value)}
//             required
//           />
//         </label>
//         <button type="submit">Get Advice</button>
//       </form>

//       {loading && <p>Loading...</p>}
//       {advice && (
//         <div className="advice-box">
//           <h2>Advice:</h2>
//           <p>{advice}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

// -- Code with updated material UI styling
import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Paper,
  CircularProgress,
  Alert,
  Autocomplete,
} from '@mui/material';

function App() {
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [advice, setAdvice] = useState('');
  const [weather, setWeather] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [cityOptions, setCityOptions] = useState([]);

  const propertyTypeOptions = [
    'Apartment',
    'Villa',
    'Bungalow',
    'Office',
    'Warehouse',
    'Retail Store',
    'Factory',
    'Farmhouse',
    'Penthouse',
    'Studio',
  ];

  // Load city list from local JSON file
  useEffect(() => {
    fetch('/indian_cities.json')
      .then((res) => res.json())
      .then((data) => {
        const cityNames = data.map((city) => `${city.name}, ${city.state}`);
        setCityOptions(cityNames);
      })
      .catch((err) => console.error('Failed to load city list:', err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setAdvice('');
    setWeather('');
    setError('');

    try {
      const response = await fetch('http://127.0.0.1:8000/get-risk-advice', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ location, property_type: propertyType }),
      });

      const data = await response.json();

      if (response.ok) {
        setAdvice(data.advice);
        setWeather(data.weather);
      } else {
        setError(data.detail || 'Something went wrong.');
      }
    } catch (err) {
      setError('Failed to connect to the server.');
    }

    setLoading(false);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom align="center">
          Weather & Insurance AI Advisor
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <Autocomplete
            options={cityOptions}
            value={location}
            onChange={(e, newValue) => setLocation(newValue || '')}
            renderInput={(params) => (
              <TextField {...params} label="Location" margin="normal" required fullWidth />
            )}
          />

          <Autocomplete
            options={propertyTypeOptions}
            value={propertyType}
            onChange={(e, newValue) => setPropertyType(newValue || '')}
            renderInput={(params) => (
              <TextField {...params} label="Property Type" margin="normal" required fullWidth />
            )}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : 'Get Advice'}
          </Button>
        </Box>

        {error && (
          <Alert severity="error" sx={{ mt: 3 }}>
            {error}
          </Alert>
        )}

        {weather && (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6">Current Weather:</Typography>
            <Typography variant="body1">{weather}</Typography>
          </Box>
        )}

        {advice && (
          <Box sx={{ mt: 3 }}>
            <Typography variant="h6">AI Advice:</Typography>
            <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
              {advice}
            </Typography>
          </Box>
        )}
      </Paper>
    </Container>
  );
}

export default App;
