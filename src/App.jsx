import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./components/MainPage";
import ChosenPassengers from "./components/ChosenPassengers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/api/chosen-passengers",
    element: <ChosenPassengers />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
