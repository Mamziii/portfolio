import routes from "./routes";
import { useRoutes } from "react-router-dom";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const router = useRoutes(routes);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      {router}
      <Footer />
    </div>
  );
}

export default App;
