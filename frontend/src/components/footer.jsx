import React from 'react';
import { Box, Container, Typography, TextField, Button } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: 'rgba(24, 36, 48, 1)', color: 'white', pt: 3, pb: 3 }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {/* Top Subscription Row */}
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
            <Typography variant="body2">EasyInsurance.AI ©2025. All rights reserved.</Typography>

            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Typography variant="body2">Terms and Conditions</Typography>
              <Typography variant="body2">Privacy Policy</Typography>
              <Typography variant="body2">Sitemap</Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
