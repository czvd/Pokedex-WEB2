import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import App from './App.jsx'
import Pokedex from "./pages/Pokedex";
import PokemonDetails from "./pages/PokemonDetails";
import About from "./pages/About";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Pokedex /> }, 
      { path: "about", element: <About /> },
      { path: "pokemon/:name", element: <PokemonDetails /> }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
