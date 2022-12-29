import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
import ErrorPage from "./pages/error";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import JuzPage from "./pages/juz";
import SuratPage from "./pages/surat";
import HalamanPage from "./pages/halaman";
import AyatPage from "./pages/surat/ayat/AyatPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/juz",
        element: <JuzPage />,
      },
      {
        path: "/surat",
        element: <SuratPage />,
      },
      {
        path: "/surat/ayat",
        element: <AyatPage />,
      },
      {
        path: "/halaman",
        element: <HalamanPage />,
      },
    ],
  },
]);

export default router;
