import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PageStarter from './utils/PageStarter/PageStarter'
import HomePage from './utils/HomePage/HomePage';
import ProfileUser from './utils/ProfileUser/ProfileUser'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageStarter />
  },
  {
    path: "/home",
    element: <App />
  },
  {
    path: "/home/portfolio",
    element: <ProfileUser />,
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
