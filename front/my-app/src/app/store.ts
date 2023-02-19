import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import galleryReducer from '../features/gallery/gallerySlice';
import loginReducer from '../features/login/loginSlice';
import profileReducer from '../features/Profile/profileSlice';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    gallery : galleryReducer,
    profile : profileReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
