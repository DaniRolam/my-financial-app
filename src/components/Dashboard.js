import React from 'react';
import { Button, Typography, Grid } from '@mui/material';

const Dashboard = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4">Financial Dashboard</Typography>
      </Grid>
      <Grid item xs={6}>
        <Button variant="contained" color="primary">
          Add Income
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button variant="contained" color="secondary">
          Add Expense
        </Button>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
