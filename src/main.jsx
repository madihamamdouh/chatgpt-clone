import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './routes/home/Home'
import Dashboard from './routes/dashboard/Dashboard'
import Chat from './routes/chat/Chat'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import DashboardLayout from './layouts/dashboardLayout/DashboardLayout'
 const router = createBrowserRouter([
     {
         
          element: <RootLayout/>,
         children:[
          {
               path:"/", element:<Home/>
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
