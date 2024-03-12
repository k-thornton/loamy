import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { persistStore, persistReducer } from 'redux-persist';

import surveyReducer from '../features/survey/surveySlice';
import authReducer from '../features/auth/authSlice';
// Import other reducers...

const rootReducer = combineReducers({
  survey: surveyReducer,
  auth: authReducer,
  // other reducers...
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'] // Specify which reducers to store, e.g., 'auth'
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }),
});

export const persistor = persistStore(store);
