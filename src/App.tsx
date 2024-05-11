import { createBrowserRouter } from "react-router-dom";


import { Home } from "./pages/home";
import { Layout } from "./components/layout";
import { Agendamento } from "./pages/agendamento";
import { PainelAgendamento } from "./pages/painelAgenda";

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
  {
    path:"/painelAgenda",
    element:<PainelAgendamento/>
  }
])

export {router};
