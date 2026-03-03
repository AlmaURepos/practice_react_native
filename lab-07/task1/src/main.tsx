
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// import React from 'react'
// import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: '*',
    element: <App />
  }
])
createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
