import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Category from '../Pages/Category/Category';
import News from '../Pages/News/News.jsx'
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import TermsAndConditions from "../Pages/Others/Terms/TermsAndConditions";

export const router =createBrowserRouter([
    {
        path:'/',
        element: <Main />,
        children:[
            {
                path:'/',
                element: <Home />,
                loader:()=>fetch('http://localhost:5000/news')
            },
            {
            path:'/category/:id',
            element: <Category />,
            loader: ({params})=> fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
             path:'/news/:id',
             element: <PrivateRoute><News /></PrivateRoute>,
             loader:({params})=>fetch(`http://localhost:5000/news/${params.id}`)
            },
            {
            path:'/register',
            element: <Register />
            },
            {
               path:"/login",
               element: <Login />
            },
            {
                path:'/terms',
                element:<TermsAndConditions />
            }
        ]
    }
])