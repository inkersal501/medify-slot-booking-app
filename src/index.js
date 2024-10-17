import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';  
import { ThemeProvider } from '@mui/material/styles';
import theme from './Theme';
import SearchResults from './Pages/SearchResults';
import MyBooking from './Pages/MyBooking';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/search",
    element: <SearchResults />,
  },
  {
    path: "/my-booking",
    element: <MyBooking />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
 