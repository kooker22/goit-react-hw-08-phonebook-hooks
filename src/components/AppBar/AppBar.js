import React from 'react';
import { useSelector } from 'react-redux';
import Navigation from '../NavBar/NavBar';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import { authSelectors } from '../../redux/auth';
import styles from './AppBar.module.css';

export default function AppBar() {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated)
  return (
    <header className={styles.header}>
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
}


