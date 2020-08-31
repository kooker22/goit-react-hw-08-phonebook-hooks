import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/phonebook/phonebook-operations';
import styles from './ContactListItem.module.css';
import { phonebookSelectors } from '../../redux/phonebook';
import { ReactComponent as Icon } from '../../theme/icons/icon.svg';

export default function ContactListItem() {
  const dispatch = useDispatch();
  const contacts = useSelector(phonebookSelectors.getVisibleContacts);
  const isLoadingContacts = useSelector(phonebookSelectors.getLoading);

  return (
    <>
      {contacts.map(({ id, name, number }) => (
        <li className={styles.item} key={id}>
          {name}: {number}
          <button
            type="button"
            className={styles.button}
            id={id}
            onClick={() => dispatch(deleteContact(id))}
          >
            <Icon className={styles.icon} />
          </button>
        </li>
      ))}
      {isLoadingContacts && <h1 className={styles.loading}>Загружаем...</h1>}
    </>
  );
}
