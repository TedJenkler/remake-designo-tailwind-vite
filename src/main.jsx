import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Homepage from './pages/Homepage';
import Errorpage from './pages/Errorpage';
import Nav from './components/Nav';
import Footer from './components/Footer';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <Errorpage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Nav />
      <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);
