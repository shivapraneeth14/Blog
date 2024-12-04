import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Culture from './Pages/Culture.jsx'
import Entertainment from './Pages/Entertainment.jsx'
import Sport from './Pages/Sport.jsx'
import SignUp from './Pages/SIgnup.jsx'
import Login from './Pages/Login.jsx'
import Blog from './Pages/Blog.jsx'

const router = createBrowserRouter([
  {
    path:"",
    element:<Login/>,

  },
  {
    path:"/:username",
    element:<App/>,
    children:[
      {
        path:"Home",
        element:<Home/>
      },
      {
        path:"Sport",
        element:<Sport/>
      }
      ,{
        path:"Entertainment",
        element:<Entertainment/>
      },
      {
        path:"Culture",
        element:<Culture/>
      },
      {
        path:"Blog/:id",
        element:<Blog/>
      }

    ]
  },
  {
    path:"/Signup",
    element:<SignUp/>
  }

  

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
   
  </StrictMode>,
)
