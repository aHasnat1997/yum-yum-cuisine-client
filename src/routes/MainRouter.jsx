import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePageLayout from "../layout/HomePageLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ChefPage from "../pages/ChefPage";


export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePageLayout />
      },
      {
        path: '/chef/:id',
        element: <ChefPage />,
        loader: ({ params }) => fetch(`https://chef-recipe-hunter-server-beta.vercel.app/chef/${params.id}`)
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      }
    ]
  },
])
