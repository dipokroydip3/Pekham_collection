import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import Root from './Root';
import Home_pages from './components/Home/Home_pages';
import Auth_Provider from './components/AuthProvider';
// import App from './App.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home_pages></Home_pages>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth_Provider>
      <RouterProvider router={router} />
    </Auth_Provider>
  </StrictMode>,
)
