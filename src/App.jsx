import { Link, Outlet } from "react-router-dom";
import "./App.css";


function App() {
  return (
    <div>
      <h1>Pokedex</h1>
      
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link>
      </nav>

      <Outlet />
    </div>
  );
}
export default App; // make this App function available for importing
