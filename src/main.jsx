import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './routes/home/Home'
import Dashboard from './routes/dashboard/Dashboard'
import Chat from './routes/chat/Chat'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
 const router = createBrowserRouter([
     {
          path: "/", 
          element: (
              <Home/>
          ),
     },{
          path:'/dashboard',
          element: <Dashboard/>,
          children: [{path: '/dashboard/chat/:id', element: <Chat/>}]
     }
 ])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
