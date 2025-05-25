import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const Card = ({ title, children }) => (
  <Paper elevation={3} sx={{ p: 3, mb: 3, backgroundColor: 'rgba(255,255,255,0.8)' }}>
    <Typography variant="h6" gutterBottom>{title}</Typography>
    <Typography variant="body1" style={{ whiteSpace: 'pre-line' }}>
      {children}
    </Typography>
  </Paper>
);

export default function ResultCards({
  loading,
  error,
  weatherReport,
  propertyInfo,
  riskAssessment,
  maintenanceTips,
}) {
  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Box mt={4}>
      <Card title="Weather Report">
        {weatherReport || 'No weather data available.'}
      </Card>

      <Card title="Property & Insurance Info">
        {propertyInfo || 'No property info available.'}
      </Card>

      <Card title="Risk Assessment">
        {riskAssessment || 'No risk assessment data available.'}
      </Card>

      <Card title="Maintenance Tips">
        {maintenanceTips || 'No maintenance tips available.'}
      </Card>
    </Box>
  );
}
