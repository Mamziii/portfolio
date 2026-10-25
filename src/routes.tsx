import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/projects/:id", element: <ProjectDetail /> },
];

export default routes;
