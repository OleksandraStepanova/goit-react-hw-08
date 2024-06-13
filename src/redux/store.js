import { configureStore } from "@reduxjs/toolkit";
import contactsReduser from './contacts/slice';
import filtersReduser from './filters/slice';
import authReduser from './auth/slice'

export const store = configureStore({
    reducer: {
        auth: authReduser,
        contacts: contactsReduser,
        filters: filtersReduser,
    }
})
