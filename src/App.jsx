import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="max-w-4xl mx-auto mt-4 py-16">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
