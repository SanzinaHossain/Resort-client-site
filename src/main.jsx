import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./Components/Screens/Home/Home.jsx"
import Blog from "./Components/Screens/Blog/Blog.jsx"
import Contact from "./Components/Screens/Contact/Contact.jsx"
import Restaurant from "./Components/Screens/Restaurant/Restaurant.jsx"
import Room from "./Components/Screens/Rooms/Room.jsx"
import Login from "./Components/Registration/Login/Login.jsx"
import Register from "./Components/Registration/Register/Register.jsx"
import BlogDetails from "./Components/Screens/Blog/BlogDetails/BlogDetails.jsx"
import AuthProvider from "./Context/AuthProvider.jsx"
import PrivateRoute from "./Components/Shared/PrivateRoute/PrivateRoute.jsx"
import RoomDetails from "./Components/Screens/Rooms/RoomDetails.jsx"
import UserProfile from "./Components/Screens/UserProfile/UserProfile.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blog />,
      },
      {
        path: "/blogDetails/:id",
        element: (
          <PrivateRoute>
            <BlogDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant",
        element: <Restaurant />,
      },
      {
        path: "/rooms",
        element: <Room />,
      },
      {
        path: "/profile",
        element: <UserProfile />,
      },
      {
        path: "/roomDetails/:id",
        element: (
          <PrivateRoute>
            <RoomDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
)
