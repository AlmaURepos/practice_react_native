import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import Layout from './Layout.tsx'
import Home from './Home.tsx'
import Courses from './Courses.tsx'
import About from './About.tsx'
import NotFound from './NotFound.tsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {index: true, element: <Home/>},
      {path: "courses", element: <Courses/>},
      {path: "about", element: <About/>},
      {path: "*", element: <NotFound/>}
    ]
  }
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
