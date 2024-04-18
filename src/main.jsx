import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './layout/Root';
import Home from './pages/Home/Home';

import ErrorPage from './pages/ErrorPage/ErrorPage';

import Login from './pages/Login/Login';
import Regerister from './pages/Regerister/Regerister';
import FirebaseProvider from './FirebaseProvider/FirebaseProvider';
import PropertyDetails from './pages/PropertyDetails/PropertyDetails';
import PrivateRoutes from './PrivateRoutes/PrivateRoutes';
import MyProfile from './pages/MyProfile/MyProfile';

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
        element:<Login></Login>,
      },
      {
        path:"/regerister",
        element:<Regerister></Regerister>,
      },
      {
        path:"/property/:uid",
        element:<PrivateRoutes><PropertyDetails></PropertyDetails></PrivateRoutes>,
        loader: () => fetch('/estate.json')
      },
      {
        path:"/my-profile",
        element:<MyProfile></MyProfile>,
      }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
   
   <FirebaseProvider>
   
   <RouterProvider router={router} />
     
  
   </FirebaseProvider>
 
    
  </React.StrictMode>,
)
