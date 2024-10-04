import React, { useState } from 'react';
import { Box, Grid, TextField, Button, Typography, Paper, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link } from "react-router-dom";
import { validateEmail, validatePassword } from './validation'; // Import validation functions

const Login = () => {
  const [formValues, setFormValues] = useState({ email: '', password: '' });
  const [formErrors, setFormErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (!validateEmail(formValues.email)) errors.email = 'Invalid email';
    if (!validatePassword(formValues.password)) errors.password = 'Password must be at least 8 characters';

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      // Submit form logic here
      console.log('Form is valid:', formValues);
    }
  };

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      {/* Left side with image and welcome message */}
      <Grid
        item
        xs={false}
        sm={4}
        md={6}
        sx={{
          backgroundColor: '#f4f6f8',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box sx={{ textAlign: 'center', p: 3 }}>
          <Typography variant="h4" fontWeight="bold">
            Hi, Welcome Back
          </Typography>
          <img
            src="https://plus.unsplash.com/premium_photo-1671032494233-d62d54b87f22"
            alt="Welcome back"
            style={{ maxWidth: '80%', marginTop: '2rem' }}
          />
        </Box>
      </Grid>

      {/* Right side with the form */}
      <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
        <Box sx={{ my: 13, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography component="h1" variant="h5" fontWeight="bold">
            Sign In to Your Account
          </Typography>

          <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={formValues.email}
              onChange={handleChange}
              error={!!formErrors.email}
              helperText={formErrors.email}
              sx={{ mt: 3 }}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              id="password"
              autoComplete="current-password"
              value={formValues.password}
              onChange={handleChange}
              error={!!formErrors.password}
              helperText={formErrors.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{ mt: 3 }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: '#007bff',
                '&:hover': {
                  backgroundColor: '#0056b3',
                },
              }}
            >
              Sign In
            </Button>
          </Box>

          <Grid item textAlign="center">
            <Typography variant="body2">
              Don't have an account?{' '}
              <Link to="/signup" style={{ color: '#007bff', textDecoration: 'none' }}>
                Sign Up
              </Link>
            </Typography>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
