// COMPONENTS
import Footer from "./components/Footer";
import Header from "./components/Header";
// COMPONENTS

// REACT ROUTER DOM
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

// IMAGES
import Homepages from "./pages/Homepages";
import RootLayout from "./layout/RootLayout";

export default function App() {
  let routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Homepages />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}
