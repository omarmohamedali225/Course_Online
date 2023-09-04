import { createBrowserRouter,Navigate,RouterProvider } from "react-router-dom";
import Home from './pages/Home.jsx'
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import Courses from "./pages/Course.jsx";
import VideosCourse from "./pages/VideosCourse.jsx";
import Contact from "./pages/Contact.jsx";
import { GlobalContext, useData } from "./components/GlobalContext/GlobalContext.jsx";
import VideoPlay from "./pages/VideoPlay.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Layout from './layout/Layout.jsx'
import { useEffect, useState } from "react";
import Code from "./pages/Code.jsx";
function App() {

  function Auth({children}){
    if(localStorage.getItem('token')&&localStorage.getItem('token')!=null){
      return <Navigate to={'/'}/>
    }else{
      return children
    }
  }

  function CheckLogin({children}){
    if(localStorage.getItem('token')&&localStorage.getItem('token')!=null){
      return children
    }else{
      return <Navigate to={'/'}/>
    }
  }



  const router = createBrowserRouter([
    {"path": "",element: <Layout/>,children:[
      {"path": "*", element: <ErrorPage/>},
      {"path": "/", element: <Home/>},
      {"path": "/login", element: <Auth><Login/></Auth>},
      {"path": "/signup", element: <Auth><SignUp/></Auth>},
      {"path": "/course", element: <Courses/>},
      {"path": "/course/:id", element: <CheckLogin><VideosCourse/></CheckLogin>},
      {"path": "/course/:id/:id", element: <CheckLogin><VideoPlay/></CheckLogin>},
      {"path": "/contact", element: <Contact/>},
      {"path": "/code/:id", element: <Code/>},
    ]}
  ])
  return (
    <GlobalContext>
      <RouterProvider router={router}/>
    </GlobalContext>
  );
}

export default App;
