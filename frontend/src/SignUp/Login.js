import React, { useState } from 'react';
import { Box, Grid, TextField, Button, Typography, Paper, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material'; // Material UI Icons for social media
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
    {/* Left side with image */}
    <Grid
      item
      xs={false}
      sm={4}
      md={6}
      sx={{
        position: 'relative', // Set position relative to contain the image
        overflow: 'hidden', // Hide any overflow
      }}
    >
      {/* Image that fills the left side area */}
      <Box
        component="img"
        src="https://tse3.mm.bing.net/th?id=OIP.Tforem_GxDO5rtCkPpyfJwHaE-&pid=Api&P=0&h=220"
        alt="Welcome back"
        sx={{
          width: '100%', // Make the image fill the container
          height: '100%', // Make the image fill the container
          objectFit: 'cover', // Cover the area while maintaining aspect ratio
          position: 'absolute', // Position the image absolutely
          top: 0,
          left: 0,
        }}
      />
    </Grid>

      {/* Right side with the form */}
      <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square sx={{ backgroundColor: '#d8ca02',border: '50px solid black' }}>
        <Box sx={{ my: 13, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' ,margin:"30px" }}>
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
              sx={{ mt: 3 ,backgroundColor:'white'}}
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
              sx={{ mt: 3 ,backgroundColor:'white'}}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: 'black',
                color:'white',
                '&:hover': {
                  backgroundColor: 'gray',
                  
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

          {/* Social Media Icons */}
          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 2 }}>
            <IconButton href="#" color="black">
              <Facebook />
            </IconButton>
            <IconButton href="#" color="black">
              <Twitter />
            </IconButton>
            <IconButton href="#" color="black">
              <Instagram />
            </IconButton>
            <IconButton href="#" color="black">
              <LinkedIn />
            </IconButton>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
