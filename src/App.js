//Core
import React, { useEffect,  Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';

//Components

import AppBar from './components/AppBar/AppBar';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

import { authOperations } from './redux/auth';
import { useDispatch } from 'react-redux';
const ContactsPage = lazy(() => import('./PhonebookPages/ContactsPage'));
const Register = lazy(() => import('./PhonebookPages/RegisterPage'));
const LogIn = lazy(() => import('./PhonebookPages/LoginPage'));
export default function Phonebook() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
    
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <Suspense fallback={<p>Loading... </p>}>
        <Switch>
          <PrivateRoute
            exact
            path="/contacts"
            redirectTo="/login"
          > 
          <ContactsPage/>
            </PrivateRoute>
          <PublicRoute
            path="/register"
            restricted
            redirectTo="/"
            
          >
            <Register/>
          </PublicRoute>
          <PublicRoute
            restricted
            redirectTo="/contacts"
            path="/login"
       
          >
            <LogIn/>
          </PublicRoute>
        </Switch>
      </Suspense>
    </>
  );
}
