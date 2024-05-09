import { createBrowserRouter } from "react-router-dom";

import { Home } from "./pages/home";
import { Layout } from "./components/layout";
import { Agendamento } from "./pages/agendamento";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/agendamento",
        element: <Agendamento />
      },
    ]
  },
])

export {router};
