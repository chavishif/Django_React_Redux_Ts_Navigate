import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Login } from './components/Login';
import Profile from './components/Profile';
import { Register } from './components/Register';
import Contact from './components/Contact';
import GeneralGallery from './components/GeneralGallery';
import Albums from './components/Albums';
import AlbumsType from './components/AlbumsType';


const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="login" element={<Login />} />
            <Route path="profile" element={<Profile />} />
            <Route path="gallery" element={<Albums />}> 
            <Route path=":id" element={<AlbumsType />}/>
            <Route path="upload" element={<GeneralGallery />}/> 
            </Route>
            <Route path="register" element={<Register />} />
            <Route path="contact" element={<Contact />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

