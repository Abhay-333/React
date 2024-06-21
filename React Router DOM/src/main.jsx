import React, { createElement } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import About from "./Components/About.jsx";
import Home from "./Components/Home.jsx";
import Contact from "./Components/Contact.jsx";
import User from "./Components/User.jsx";
import Github from "./Components/Github.jsx";
import {gitInfoLoader} from "./Components/Github.jsx";


// const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <App />,
//     children:[
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path: "/about",
//         element: <About/>
//       },
//       {
//         path: "/contact",
//         element: <Contact/>
//       },
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
      <Route path="/user" element={<User></User>}></Route>
      <Route path="/user/:userId" element={<User></User>}></Route>
      <Route loader={gitInfoLoader} path="/github" element={<Github></Github>}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
