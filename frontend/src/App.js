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
// import React, { useState, useEffect } from 'react';
// import {
//   Container,
//   Typography,
//   TextField,
//   Button,
//   Box,
//   Paper,
//   CircularProgress,
//   Alert,
//   Autocomplete,
// } from '@mui/material';

// function App() {
//   const [location, setLocation] = useState('');
//   const [propertyType, setPropertyType] = useState('');
//   const [advice, setAdvice] = useState('');
//   const [weather, setWeather] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [cityOptions, setCityOptions] = useState([]);

//   const propertyTypeOptions = [
//     'Apartment',
//     'Villa',
//     'Bungalow',
//     'Office',
//     'Warehouse',
//     'Retail Store',
//     'Factory',
//     'Farmhouse',
//     'Penthouse',
//     'Studio',
//   ];

//   // Load city list from local JSON file
//   useEffect(() => {
//     fetch('/indian_cities.json')
//       .then((res) => res.json())
//       .then((data) => {
//         const cityNames = data.map((city) => `${city.name}, ${city.state}`);
//         setCityOptions(cityNames);
//       })
//       .catch((err) => console.error('Failed to load city list:', err));
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setAdvice('');
//     setWeather('');
//     setError('');

//     try {
//       const response = await fetch('http://127.0.0.1:8000/get-risk-advice', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ location, property_type: propertyType }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setAdvice(data.advice);
//         setWeather(data.weather);
//       } else {
//         setError(data.detail || 'Something went wrong.');
//       }
//     } catch (err) {
//       setError('Failed to connect to the server.');
//     }

//     setLoading(false);
//   };

//   return (
//     <Container maxWidth="sm" sx={{ mt: 5 }}>
//       <Paper elevation={3} sx={{ p: 4 }}>
//         <Typography variant="h4" gutterBottom align="center">
//           Weather & Insurance AI Advisor
//         </Typography>

//         <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
//           <Autocomplete
//             options={cityOptions}
//             value={location}
//             onChange={(e, newValue) => setLocation(newValue || '')}
//             renderInput={(params) => (
//               <TextField {...params} label="Location" margin="normal" required fullWidth />
//             )}
//           />

//           <Autocomplete
//             options={propertyTypeOptions}
//             value={propertyType}
//             onChange={(e, newValue) => setPropertyType(newValue || '')}
//             renderInput={(params) => (
//               <TextField {...params} label="Property Type" margin="normal" required fullWidth />
//             )}
//           />

//           <Button
//             type="submit"
//             variant="contained"
//             fullWidth
//             sx={{ mt: 2 }}
//             disabled={loading}
//           >
//             {loading ? <CircularProgress size={24} /> : 'Get Advice'}
//           </Button>
//         </Box>

//         {error && (
//           <Alert severity="error" sx={{ mt: 3 }}>
//             {error}
//           </Alert>
//         )}

//         {weather && (
//           <Box sx={{ mt: 4 }}>
//             <Typography variant="h6">Current Weather:</Typography>
//             <Typography variant="body1">{weather}</Typography>
//           </Box>
//         )}

//         {advice && (
//           <Box sx={{ mt: 3 }}>
//             <Typography variant="h6">AI Advice:</Typography>
//             <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
//               {advice}
//             </Typography>
//           </Box>
//         )}
//       </Paper>
//     </Container>
//   );
// }

// export default App;



///Shubham Bansal Code

import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  TextField,
  Box,
  Paper,
  CircularProgress,
  Alert,
  Autocomplete,
  Grid,
  Card,
  CardContent,
  LinearProgress,
  FormControl, InputLabel, Select, MenuItem, CardMedia
} from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import homeImage from './image/home_image.png';

import InputAdornment from '@mui/material/InputAdornment';

import AttachMoneyIcon from '@mui/icons-material/AttachMoney';



function App() {
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [advice, setAdvice] = useState('');
  const [weather, setWeather] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [cityOptions, setCityOptions] = useState([]);

  const propertyTypeOptions = [
    'Apartment', 'Villa', 'Bungalow', 'Office', 'Warehouse',
    'Retail Store', 'Factory', 'Farmhouse', 'Penthouse', 'Studio',
  ];

  // Load city list
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
        headers: { 'Content-Type': 'application/json' },
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
    <Box>
      {/* HEADER SECTION */}
      <Box sx={{
        height: '40vh',
        background: 'linear-gradient(to right, rgba(24, 36, 48, 1) 20%, rgba(255, 255, 255, 0.3) 100%)',

        position: 'relative',
        mb: 4
      }}>


        {/* NAVBAR */}
        <Box sx={{ px: 6, pt: 2, position: 'relative', zIndex: 10, display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ width: '100%', maxWidth: 1500 }}> {/* Adjust maxWidth here */}
            <AppBar
              position="static"
              elevation={4}
              sx={{
                bgcolor: 'white',
                borderRadius: 2,
                px: 2,
                py: 0.5,
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
              }}
            >
              <Toolbar disableGutters sx={{ minHeight: '48px !important', px: 1 }}>
                <Typography variant="h6" sx={{ flexGrow: 1, color: '#1c1a1a', fontWeight: 'bold' }}>
                  EasyInsurance.ai
                </Typography>
                <Button sx={{ fontWeight: 500, color: '#1c1a1a', minWidth: 'auto', px: 1 }}>About Us</Button>
                <Button sx={{ fontWeight: 500, color: '#1c1a1a', minWidth: 'auto', px: 1 }}>Support</Button>
                <Button startIcon={<LoginIcon />} sx={{ fontWeight: 500, color: '#1c1a1a', minWidth: 'auto', px: 1 }}>
                  Login
                </Button>
              </Toolbar>
            </AppBar>
          </Box>
        </Box>


        {/* OVERLAY TEXT */}
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            maxWidth: 1500,
            mx: 'auto',
            mt: 6,
            px: 6,
            color: '#ffffff',
          }}
        >
          <Typography variant="h4" fontWeight={600}>
            Your Safety, Our Priority – Insure Today
          </Typography>
          <Typography variant="subtitle1" fontWeight={500} sx={{ mt: 1 }}>
            Secure your home with Cutting Edge AI Insurance -
            Crazy features,Lasting savings
          </Typography>
        </Box>




        {/* BACKGROUND IMAGE */}
        <Box
          component="img"
          src={homeImage}
          alt="Property"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 1,
            zIndex: -1, // keeps image behind content
          }}
        />

      </Box>

      {/* BODY SECTION */}
      <Container maxWidth="lg">
        <Paper elevation={5} sx={{ maxWidth: 1100, mx: 'auto', borderRadius: 3 }}>
          <Card sx={{ display: 'flex', borderRadius: 3, boxShadow: '0 8px 24px rgba(0,0,0,0.15)' }}>
            {/* Image side */}
            <CardMedia
              component="img"
              sx={{ width: 400, borderTopLeftRadius: 12, borderBottomLeftRadius: 12, objectFit: 'cover', transition: 'transform 0.4s ease' }}
              image="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
              alt="Property"
              onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
            />

            {/* Form side */}
            <Box sx={{ flex: 1, p: 4, background: '#fff', borderTopRightRadius: 12, borderBottomRightRadius: 12 }}>
              <Typography variant="h5" fontWeight={700} mb={3} color="#225a93" letterSpacing={1}>
                Property Risk Assessment
              </Typography>

              <Grid container spacing={3}>

                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Location"
                    variant="outlined"
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                    fullWidth
                    required
                    helperText="Enter Your address"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                        transition: 'all 0.3s ease',
                        '&:hover fieldset': { borderColor: '#225a93' },
                        '&.Mui-focused fieldset': { borderColor: '#225a93', boxShadow: '0 0 8pxrgb(255, 255, 255)' },
                      },
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    select
                    label="Property Type"
                    value={propertyType}
                    onChange={e => setPropertyType(e.target.value)}
                    fullWidth
                    required
                    helperText="Select property type"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                        transition: 'all 0.3s ease',
                        '&:hover fieldset': { borderColor: '#225a93' },
                        '&.Mui-focused fieldset': { borderColor: '#225a93', boxShadow: '0 0 8pxrgb(255, 255, 255)' },
                      },
                    }}
                  >
                    {propertyTypeOptions.map((type) => (
                      <MenuItem key={type} value={type}>
                        {type}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Estimated Property Value"
                    type="number"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          ₹
                        </InputAdornment>
                      ),
                    }}
                    fullWidth
                    required
                    helperText="In rupees"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                        transition: 'all 0.3s ease',
                        '&:hover fieldset': { borderColor: '#225a93' },
                        '&.Mui-focused fieldset': { borderColor: '#225a93', boxShadow: '0 0 8pxrgb(255, 255, 255)' },
                      },
                    }}
                  />
                </Grid>


                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Property Age (Years)"
                    type="number"
                    fullWidth
                    required
                    helperText="How old is your property?"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                        transition: 'all 0.3s ease',
                        '&:hover fieldset': { borderColor: '#225a93' },
                        '&.Mui-focused fieldset': { borderColor: '#225a93', boxShadow: '0 0 8pxrgb(255, 255, 255)' },
                      },
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
    <TextField
      label="Pincode"
      variant="outlined"
      fullWidth
      required
      helperText="Enter 6-digit area pincode"
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: 2,
          transition: 'all 0.3s ease',
          '&:hover fieldset': { borderColor: '#225a93' },
          '&.Mui-focused fieldset': { borderColor: '#225a93' },
        },
      }}
    />
  </Grid>

                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{
                      mt: 2,
                      py: 1.8,
                      fontWeight: 700,
                      fontSize: '1.1rem',
                      backgroundImage: 'linear-gradient(135deg, #4b7fc2 0%, #225a93 100%)',
                      boxShadow: '0 6px 15px rgba(34, 90, 147, 0.4)',
                      borderRadius: 3,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundImage: 'linear-gradient(135deg, #3c6faf 0%, #1e4d84 100%)',
                        boxShadow: '0 8px 20px rgba(34, 90, 147, 0.6)',
                        transform: 'scale(1.05)',
                      },
                    }}
                  >
                    Get Risk Advice
                  </Button>
                </Grid>




              </Grid>
            </Box>
          </Card>
        </Paper>



        {/* RiskIQ Bar */}
  <Box sx={{ maxWidth: 1100, mx: 'auto', mb: 4,mt:6 }}>
  <Typography
    variant="h6"
    sx={{ mb: 1, fontWeight: 600 }}
  >
    RiskIQ:
  </Typography>

  <Box
    sx={{
      position: 'relative',
      height: 40,
      borderRadius: 4,
      background: 'linear-gradient(to right, #4caf50 0%, #f44336 100%)',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      px: 2,
    }}
  >
    <Typography sx={{ fontWeight: 600, color: '#fff' }}>
      Protected Zone - 30%
    </Typography>
    <Typography sx={{ fontWeight: 600, color: '#fff' }}>
      Threat Zone - 70%
    </Typography>
  </Box>
</Box>


        {/* Additional Content Cards (Placeholder) */}
        <Card elevation={2} sx={{ p: 3, mb: 4 }}>
          <Grid container spacing={2}>
            {[1, 2, 3, 4].map((i) => (
              <Grid item xs={12} sm={6} key={i}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="h6">Feature Card {i}</Typography>
                    <Typography variant="body2">Details about feature {i} here.</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Card>

      </Container>

      {/* FOOTER (placeholder) */}

      <Box sx={{ backgroundColor: 'rgba(24, 36, 48, 1)', color: 'white', pt: 3, pb: 3 }}>
  {/* Top Subscription Row */}
  <Container maxWidth="lg">
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>

      <Box
  sx={{
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 2,
    width: '100%',
  }}
>
  <Typography variant="h6" fontWeight="bold" sx={{ color: 'white' }}>
    EasyInsurance.ai
  </Typography>

  <Box sx={{ display: 'flex', width: { xs: '100%', sm: '60%' } }}>
    <TextField
      variant="outlined"
      fullWidth
      placeholder="Enter your email to know more about us"
      size="small"
      InputProps={{
        sx: {
          backgroundColor: '#fff',
          borderRadius: 1,
          fontSize: '0.9rem',
          height: 36,
        },
      }}
      sx={{
        mr: 1,
        '.MuiOutlinedInput-notchedOutline': {
          borderColor: '#ccc',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: '#bbb',
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: '#225a93',
        },
      }}
    />
    <Button
      size="small"
      sx={{
        height: 36,
        fontWeight: 'bold',
        fontSize: '0.9rem',
        backgroundColor: '#fff',
        color: '#225a93',
        border: '1px solid #225a93',
        borderRadius: '4px',
        px: 3,
        '&:hover': {
          backgroundColor: '#f0f0f0',
          color: '#1a4773',
        },
      }}
    >
      Subscribe
    </Button>
  </Box>
</Box>


      {/* Middle Section */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
          gap: 4,
          mt: 2,
        }}
      >
        <Box>
          <Typography variant="subtitle1" fontWeight={600} gutterBottom>
            Insurance
          </Typography>
          <Typography variant="body2">Property Insurance</Typography>
          <Typography variant="body2">Building Insurance</Typography>
          <Typography variant="body2">Home Insurance</Typography>
        </Box>

        <Box>
          <Typography variant="subtitle1" fontWeight={600} gutterBottom>
            Support
          </Typography>
          <Typography variant="body2">Track Your Claim</Typography>
          <Typography variant="body2">File a New Claim</Typography>
          <Typography variant="body2">Get Help</Typography>
        </Box>

        <Box>
          <Typography variant="subtitle1" fontWeight={600} gutterBottom>
            Useful Links
          </Typography>
          <Typography variant="body2">About Us</Typography>
          <Typography variant="body2">Contact Us</Typography>
          <Typography variant="body2">Login</Typography>
        </Box>

        <Box>
          <Typography variant="subtitle1" fontWeight={600} gutterBottom>
            Join Us
          </Typography>
          <Typography variant="body2">YouTube</Typography>
          <Typography variant="body2">Instagram</Typography>
          <Typography variant="body2">LinkedIn</Typography>
        </Box>
      </Box>

      {/* Divider */}
      <Box sx={{ borderTop: '1px solid grey', mt: 2 }} />

      {/* Bottom Footer */}
      <Box
        sx={{
          mt: 0,
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <Typography variant="body2">
          EasyInsurance.AI ©2025. All rights reserved.
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <Typography variant="body2">Terms and Conditions</Typography>
          <Typography variant="body2">Privacy Policy</Typography>
          <Typography variant="body2">Sitemap</Typography>
        </Box>
      </Box>
    </Box>
  </Container>
</Box>

    </Box>
  );
}

export default App;



