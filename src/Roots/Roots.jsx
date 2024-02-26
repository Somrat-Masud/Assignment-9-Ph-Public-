import {
    createBrowserRouter,
  } from "react-router-dom";


import Home from "../Components/Banner/Page/Home";
import About from "../Components/Banner/Page/About";

import Login from "../Components/Banner/Page/Login";
import Gallary from "../Components/Banner/Page/Gallary";
import OurServices from "../Components/Banner/Page/Card/OurServices";
import Routes from "../Components/Banner/Routes/Routes";
import DetailsPage from "../Components/Banner/Page/DetailsPage/DetailsPage";
import Register from "../Components/Banner/Page/Register/Register";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Routes></Routes>,
      children:[
      
        {
            path: '/',
            element:<Home></Home>,
            loader: () => fetch('/data.json')
       
        },
        {
            path:'/about',
            element:<About></About>
        },
        
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/gallery',
            element:<Gallary></Gallary>
        },
        {
          path:'/OurServices',
          element:<OurServices></OurServices>,
          loader: () => fetch('/data.json')
          
        },
        {
          path:'/carddetails/:id',
          element: <DetailsPage></DetailsPage>,
          loader: () => fetch('/data.json')
        },
        {
          path:'/register',
          element:<Register></Register>
        }
      ]
    },
  ]);  


export default router;