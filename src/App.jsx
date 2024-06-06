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
} from "react-router-dom";

// IMAGES
import Homepages from "./pages/Homepages";
import RootLayout from "./layout/RootLayout";
import NumberPages from "./pages/NumberPages";
import LastPage from "./pages/LastPage";

export default function App() {
  let routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Homepages />} />
        <Route path="About" element={<NumberPages/>} />
        <Route path="Last" element={<LastPage/>} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}
