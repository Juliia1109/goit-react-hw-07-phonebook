import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from './contactSlice';

import { contactFilterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: contactFilterReducer,
  },
});
