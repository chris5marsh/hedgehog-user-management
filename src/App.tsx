import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import "./App.css";

function App() {
  return (
    <main className="container">
      <Nav />
      <Outlet />
    </main>
  );
}

export default App;
