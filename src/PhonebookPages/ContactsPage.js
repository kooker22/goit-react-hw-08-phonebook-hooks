import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';

import Form from '../components/Form';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';
import { fetchContacts } from '../redux/phonebook/phonebook-operations';

export default function ContactsPage()  {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchContacts())
   
  }, [dispatch])



    return (
      <>
        <div className="container">
          <div className="wrapper">
            <Form  />
            <Filter />
          </div>
          <ContactList />
        </div>
      </>
    );
  }



