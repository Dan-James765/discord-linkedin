import { configureStore } from '@reduxjs/toolkit';
import channelReducer from '../features/counter/channelSlice';
import userReducer from '../features/counter/userSlice'



export const store = configureStore({
  reducer: {
    channel: channelReducer, 
    user: userReducer
  }
})
