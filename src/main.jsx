import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './routes/home/Home'
import Dashboard from './routes/dashboard/Dashboard'
import Chat from './routes/chat/Chat'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import DashboardLayout from './layouts/dashboardLayout/DashboardLayout'
import { SignIn, SignUp } from '@clerk/clerk-react'



const router = createBrowserRouter([
     {
         
          element: <RootLayout/>,
         children:[
          {
               path:"/", element:<Home/>
          },
          {
               path:"/sign-in/*", element:<SignIn/>
          },
          {
               path:"/sign-up/*", element:<SignUp/>
          },
          {
               element: <DashboardLayout/>,
               children:[
                    {
                         path:'/dashboard',
                         element:<Dashboard/>
                    },
                    {
                         path:'/chat',
                         element: <Chat/>
                    }
               ]
          }
         ]
     }
 ])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
