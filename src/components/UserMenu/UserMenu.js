import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './default-avatar.png';
import styles from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const onLogout = useCallback(() => {
    dispatch(authOperations.logOut());
  }, [dispatch]);
  return (
    <div className={styles.container}>
      <img src={defaultAvatar} alt="" width="32" className={styles.avatar} />
      <span className={styles.name}>Welcome, {name}</span>
      <button type="button" className={styles.btn} onClick={onLogout}>
        Logout
      </button>
    </div>
  );
}
