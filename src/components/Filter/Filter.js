import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { changeFilter } from '../../redux/phonebook/phonebook-actions';
import { phonebookSelectors } from '../../redux/phonebook';

export default function Filter() {
  const dispatch = useDispatch();
  const onChange = e => dispatch(changeFilter(e.target.value));
  const value = useSelector(phonebookSelectors.getFilter);
  const contacts = useSelector(phonebookSelectors.getContacts);
 
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
    contacts.length > 2 && (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Contact Filter"
            value={value}
            onChange={onChange}
            autoFocus
          />
        </div>
      </Container>
    )
  );
}
