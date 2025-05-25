import React from 'react';
import {
  Paper,
  Card,
  CardMedia,
  Box,
  Typography,
  Grid,
  TextField,
  MenuItem,
  InputAdornment,
  Button,
} from '@mui/material';

const propertyTypeOptions = ['House', 'Apartment', 'Office', 'Shop', 'Other'];

const PropertyDetails = ({
  location, setLocation, propertyType, setPropertyType, 
                          propertyValue, setPropertyValue,
                          propertyAge, setPropertyAge, pincode, setPincode,
                          address, setAddress, onSubmit 
}) => {
  return (
    <Paper elevation={5} sx={{ maxWidth: 1100, mx: 'auto', borderRadius: 3 }}>
      <Card
        sx={{
          display: 'flex',
          borderRadius: 3,
          boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
          flexDirection: { xs: 'column', sm: 'row' },
        }}
      >
        <CardMedia
          component="img"
          sx={{
            width: { xs: '100%', sm: 400 },
            borderTopLeftRadius: 12,
            borderBottomLeftRadius: { xs: 0, sm: 12 },
            borderTopRightRadius: { xs: 12, sm: 0 },
            objectFit: 'cover',
            transition: 'transform 0.4s ease',
          }}
          image="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
          alt="Property"
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        />

        <Box
          component="form"
          onSubmit={onSubmit}
          sx={{
            flex: 1,
            p: 4,
            background: '#fff',
            borderTopRightRadius: 12,
            borderBottomRightRadius: 12,
          }}
          noValidate
          autoComplete="off"
        >
          <Typography variant="h5" fontWeight={700} mb={3} color="#225a93" letterSpacing={1}>
            Property Risk Assessment
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Location"
                variant="outlined"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                fullWidth
                required
                helperText="Enter your City"
                sx={textFieldStyle}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                select
                label="Property Type"
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                fullWidth
                required
                helperText="Select property type"
                sx={textFieldStyle}
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
                value={propertyValue}
                onChange={(e) => setPropertyValue(e.target.value)}
                InputProps={{
                  startAdornment: <InputAdornment position="start">₹</InputAdornment>,
                }}
                fullWidth
                required
                helperText="In rupees"
                sx={textFieldStyle}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Property Age (Years)"
                type="number"
                value={propertyAge}
                onChange={(e) => setPropertyAge(e.target.value)}
                fullWidth
                required
                helperText="How old is your property?"
                sx={textFieldStyle}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Pincode"
                variant="outlined"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                fullWidth
                required
                helperText="Enter 6-digit area pincode"
                sx={textFieldStyle}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
  <TextField
    label="Address"
    variant="outlined"
    value={address}
    onChange={(e) => setAddress(e.target.value)}
    fullWidth
    required
    helperText="Enter Your Address"
    sx={textFieldStyle}
  />
</Grid>


            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={submitButtonStyle}
              >
                Get Risk Advice
              </Button>
            </Grid>

          </Grid>
        </Box>
      </Card>
    </Paper>
  );
};

const textFieldStyle = {
  '& .MuiOutlinedInput-root': {
    borderRadius: 2,
    transition: 'all 0.3s ease',
    '&:hover fieldset': { borderColor: '#225a93' },
    '&.Mui-focused fieldset': { borderColor: '#225a93', boxShadow: '0 0 8px rgb(255, 255, 255)' },
  },
};

const submitButtonStyle = {
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
};

export default PropertyDetails;
