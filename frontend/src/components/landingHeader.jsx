import React from 'react';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import homeImage from '../image/home_image.png'; // Update this path as per your project

const LandingHeader = () => {
  return (
    <Box
      sx={{
        height: '40vh',
        background: 'linear-gradient(to right, rgba(24, 36, 48, 1) 20%, rgba(255, 255, 255, 0.3) 100%)',
        position: 'relative',
        mb: 4,
      }}
    >
      {/* NAVBAR */}
      <Box sx={{ px: 6, pt: 2, position: 'relative', zIndex: 10, display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ width: '100%', maxWidth: 1500 }}>
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
              <Button
                startIcon={<LoginIcon />}
                sx={{ fontWeight: 500, color: '#1c1a1a', minWidth: 'auto', px: 1 }}
              >
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
          Secure your home with Cutting Edge AI Insurance – Crazy features, Lasting savings
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
          zIndex: -1,
        }}
      />
    </Box>
  );
};

export default LandingHeader;
