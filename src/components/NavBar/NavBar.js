import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import styles from './NavBar.module.css';

export default function Navigation() {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
  return (
    <nav>
      {isAuthenticated && (
        <NavLink to="/contacts" exact className={styles.link}>
          Phonebook
        </NavLink>
      )}
    </nav>
  );
}
