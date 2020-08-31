import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

export default function Register() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = useCallback(({ target: { name, value } }) => {
    if (name === 'name') {
      setName(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'email') {
      setEmail(value);
    }
  }, []);

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(authOperations.register({name,email,password}));

    setName('');
    setEmail('');
    setPassword('');
  };
  const classes = makeStyles(theme => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      mt: 10,
    },
  }));

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form
          onSubmit={handleSubmit}
          autoComplete="off"
          className={classes.form}
          noValidate
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                autoComplete="fname"
                name="name"
                value={name}
                onChange={handleChange}
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={email}
                onChange={handleChange}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                value={password}
                onChange={handleChange}
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            mt={10}
          >
            Sign Up
          </Button>
          <Grid container></Grid>
        </form>
      </div>
    </Container>
  );
}
