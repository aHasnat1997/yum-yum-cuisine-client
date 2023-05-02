import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePageLayout from "../layout/HomePageLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";


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
