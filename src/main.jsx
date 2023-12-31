import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import MainLayout from './layout/MainLayout.jsx';
import Home from './layout/Home.jsx';
import Favourites from './Components/Favourites/Favourites';
import Login from './Components/Login/Login';
import PhoneDetails from './Components/Phones/PhoneDetails';
import { createContext } from 'react';

export const GlobalContext = createContext(null)

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    children:[
      {
        path:'/',
        loader: ()=> fetch('/data.json'),
        element:<Home></Home>
      },
      {
        path:'/favorites',
        element:<Favourites></Favourites>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/phone/:id',
        loader:()=> fetch('/data.json'),
        element:<PhoneDetails></PhoneDetails>
      }
    ]

  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <GlobalContext.Provider value={{user:"true"}}>
  <RouterProvider router={router}></RouterProvider>

   </GlobalContext.Provider >
  </React.StrictMode>,
)
