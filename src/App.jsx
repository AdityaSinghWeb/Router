import {
  createBrowserRouter,
  // createRoutesFromElements,
  // Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import GitHub, { githubInfoLoader } from "./components/GitHub";
import User from "./components/User";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Conditions from "./components/Conditions";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "github", element: <GitHub />, loader: githubInfoLoader },
        { path: "user/:userId", element: <User /> },
        {path:"privacy-policy", element: <PrivacyPolicy />},
        {path:"terms&conditions", element: <Conditions />}
      ],
    },
  ]);

  // const route = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path="/" element={<RootLayout />}>
  //       <Route path="" element={<Home />} />
  //       <Route path="about" element={<About />} />
  //       <Route path="contact" element={<Contact />} />
  //       <Route path="user/:userId" element={<User />} />
  //       <Route loader={githubInfoLoader} path="github" element={<GitHub />} />
  //     </Route>
  //   )
  // );

  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
