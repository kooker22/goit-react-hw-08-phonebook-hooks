import React, { useState, useCallback } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { phonebookSelectors } from '../../redux/phonebook';
import { addContact } from '../../redux/phonebook/phonebook-operations';
import 'react-toastify/dist/ReactToastify.css';

export default function Form({ onSubmit }) {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contact = { name, number };
  const contacts = useSelector(phonebookSelectors.getContacts);

  const handleChange = useCallback(
    ({ target: { name, value } }) => {
      if (name === 'name') {
        setName(value);
      } else if (name === 'number') {
        setNumber(value);
      }
    },
    [],
  );

  const handleSubmit = e => {
    const notifyDublicate = () => toast('This contact already exist');
    const notifyEmptyInput = () => toast('enter name and number');
    const isDublicate = contacts.some(contact => contact.name === name);
    e.preventDefault();
    if (name && number !== '') {
      if (isDublicate) {
        notifyDublicate();
      } else {
        dispatch(addContact(contact));

        resetForm();
      }
    } else {
      notifyEmptyInput();
    }
  };

  const resetForm = () => {
    setName('');
    setNumber('');
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
    },
  }));

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Fill all fields to add contact *
        </Typography>
        <form
          onSubmit={handleSubmit}
          className={classes.form}
          autoComplete="off"
          noValidate
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Name"
            name="name"
            value={name}
            onChange={handleChange}
            autoComplete="off"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="number"
            value={number}
            onChange={handleChange}
            label="Number"
            type="number"
            autoComplete="current-password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Add contact
          </Button>
          <ToastContainer />
        </form>
      </div>
    </Container>
  );
}
