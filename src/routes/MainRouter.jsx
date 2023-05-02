import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePageLayout from "../layout/HomePageLayout";


export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePageLayout />
      }
    ]
  }
])
