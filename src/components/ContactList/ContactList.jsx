import React from "react";
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from "redux/operations";
import { selectVisibleContacts } from 'redux/contactSelectors';

export default function ContactList() {
const dispatch = useDispatch();
const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <ul className={css.list}>
    {visibleContacts.map(({ id, name, number }) =>
    (<li  key = {id} className={css.item}>
              {name}:{number}
     <button
     type="button"
     onClick={() => dispatch(deleteContact(id))}
     className={css.button}
     >
      Delete
     </button>
        </li>
        ))}
</ul>
  )
}




