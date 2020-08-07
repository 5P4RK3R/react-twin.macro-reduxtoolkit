import { configureStore } from '@reduxjs/toolkit';
import peopleReducer from '../components/People/peopleSlice';

export default configureStore({
  reducer: {
    people: peopleReducer,
  },
});
