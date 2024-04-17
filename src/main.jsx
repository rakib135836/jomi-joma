import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './layout/Root';
import Home from './pages/Home/Home';
import { HelmetProvider } from 'react-helmet-async';
import ErrorPage from './pages/ErrorPage/ErrorPage';

import Login from './pages/Login/Login';
import Regerister from './pages/Regerister/Regerister';
import FirebaseProvider from './FirebaseProvider/FirebaseProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/regerister",
        element:<Regerister></Regerister>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
   
   <FirebaseProvider>
   <RouterProvider router={router} />
   </FirebaseProvider>
   
    </HelmetProvider>
    
  </React.StrictMode>,
)
