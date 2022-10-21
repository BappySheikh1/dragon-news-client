import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Category from '../Pages/Category/Category';
import News from '../Pages/News/News.jsx'
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import TermsAndConditions from "../Pages/Others/Terms/TermsAndConditions";
import Profile from "../Pages/Others/Profile/Profile";

export const router =createBrowserRouter([
    {
        path:'/',
        element: <Main />,
        children:[
            {
                path:'/',
                element: <Home />,
                loader:()=>fetch('https://dragon-news-server-vert.vercel.app/news')
            },
            {
            path:'/category/:id',
            element: <Category />,
            loader: ({params})=> fetch(`https://dragon-news-server-vert.vercel.app/category/${params.id}`)
            },
            {
             path:'/news/:id',
             element: <PrivateRoute><News /></PrivateRoute>,
             loader:({params})=>fetch(`https://dragon-news-server-vert.vercel.app/news/${params.id}`)
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
            },
            {
                path:'/profile',
                element:<PrivateRoute><Profile /></PrivateRoute>
            }
        ]
    }
])