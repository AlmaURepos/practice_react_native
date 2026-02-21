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
import CoursesDetail from '../../task2/CourseDetail.tsx'
import { getCourseById } from '../../task2/data.ts'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {index: true, element: <Home/>},
      {path: "courses", element: <Courses/>},
      {path: "about", element: <About/>},
      {path: "*", element: <NotFound/>},
      {path: "courses/:id", element: <CoursesDetail/>, errorElement: <NotFound/>, loader: async ({params}) => {
        const id = parseInt(params.id!);
        const course = getCourseById(id);
        if(!course){
          throw new Response("Not Found", {status: 404});
        }
        return course;
      }}
    ]
  }
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
