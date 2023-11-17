import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./views/Home/Home";
import Portfolio from "./views/Portfolio/Portfolio";
import Contact from "./views/Contact/Contact";
import './App.css'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/portfolio",
      element: <Portfolio />,
    },
    {
      path: "/contact",
      element: <Contact />,
    }
  ]);


  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
