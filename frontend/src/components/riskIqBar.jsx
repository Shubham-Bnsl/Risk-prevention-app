import React from 'react';
import { Box, Typography } from '@mui/material';

const RiskIQBar = ({ protectedPercent = 30, threatPercent = 70 }) => {
  return (
    <Box sx={{ maxWidth: 1100, mx: 'auto', mb: 4, mt: 6 }}>
      <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
        RiskIQ:
      </Typography>

      <Box
        sx={{
          position: 'relative',
          height: 40,
          borderRadius: 4,
          display: 'flex',
          overflow: 'hidden',
          boxShadow: '0 2px 8px rgb(0 0 0 / 0.15)',
        }}
      >
        {/* Protected Zone with green gradient */}
        <Box
          sx={{
            width: `${protectedPercent}%`,
            background: 'linear-gradient(90deg, #4caf50 0%, #81c784 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontWeight: 600,
            transition: 'width 0.5s ease',
            whiteSpace: 'nowrap',
          }}
        >
          Protected Zone - {protectedPercent}%
        </Box>

        {/* Threat Zone with red gradient */}
        <Box
          sx={{
            width: `${threatPercent}%`,
            background: 'linear-gradient(90deg, #f44336 0%, #e57373 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontWeight: 600,
            transition: 'width 0.5s ease',
            whiteSpace: 'nowrap',
          }}
        >
          Threat Zone - {threatPercent}%
        </Box>
      </Box>
    </Box>
  );
};

export default RiskIQBar;
