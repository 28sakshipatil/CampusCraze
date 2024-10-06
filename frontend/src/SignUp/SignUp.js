import React, { useState } from 'react';
import { Box, Grid, TextField, Button, Typography, Paper, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link } from "react-router-dom";
import { validateEmail, validatePassword, validateName, validateCollege } from './validation'; // Import the validation functions

const SignUp = () => {
  const [formValues, setFormValues] = useState({ firstName: '', lastName: '', email: '', password: '', college: '' });
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

    if (!validateName(formValues.firstName)) errors.firstName = 'First name is required';
    if (!validateName(formValues.lastName)) errors.lastName = 'Last name is required';
    if (!validateEmail(formValues.email)) errors.email = 'Invalid email';
    if (!validatePassword(formValues.password)) errors.password = 'Password must be at least 8 characters';
    if (!validateCollege(formValues.college)) errors.college = 'College name is required';

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
      <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square sx={{ backgroundColor: '#d8ca02',border: '30px solid black' }}>
        <Box sx={{ my: 13, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' ,margin:"30px"}}>
          <Typography component="h1" variant="h5" fontWeight="bold">
            Get started absolutely free.
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Eiusmod et ex qui enim ullamco occaecat mollit adipisicing sint in et id anim ut.
          </Typography>

          <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={formValues.firstName}
                  onChange={handleChange}
                  error={!!formErrors.firstName}
                  helperText={formErrors.firstName}
                  sx={{backgroundColor:'white'}}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={formValues.lastName}
                  onChange={handleChange}
                  error={!!formErrors.lastName}
                  helperText={formErrors.lastName}
                  sx={{backgroundColor:'white'}}
                />
              </Grid>
            </Grid>

            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email address"
              name="email"
              autoComplete="email"
              value={formValues.email}
              onChange={handleChange}
              error={!!formErrors.email}
              helperText={formErrors.email}
              sx={{ mt: 3,backgroundColor:'white' }}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="college"
              label="College Name"
              name="college"
              autoComplete="college"
              value={formValues.college}
              onChange={handleChange}
              error={!!formErrors.college}
              helperText={formErrors.college}
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
              autoComplete="new-password"
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
              sx={{ mt: 3 , backgroundColor:'white'}}
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
              Register
            </Button>
          </Box>

          <Grid item textAlign="center">
            <Typography variant="body2">
              Already have an account?{' '}
              <Link to="/login" style={{ color: '#007bff', textDecoration: 'none' }}>
                Login
              </Link>
            </Typography>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SignUp;
