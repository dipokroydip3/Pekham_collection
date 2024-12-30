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
import Product_details from './components/Pages/Product_details';
import Login from './components/Pages/Login/Login';
import Shop from './components/Pages/Shop/Shop';
import Blog from './components/Pages/Blog/Blog';
import Contact from './components/Pages/Contact/Contact';
// import App from './App.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home_pages></Home_pages>
      },
      {
        path: "/details/:id",
        element: <Product_details></Product_details>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>
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
