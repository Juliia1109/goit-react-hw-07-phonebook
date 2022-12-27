import React from 'react';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import css from './App.module.css';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/contactSelectors';


export function App () {

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

    return (
      <div>
      <h1 className={css.text}>Phonebook</h1>
      <ContactForm  />
      <h2  className={css.text}>Contacts</h2>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
      </div>
    );
  }


