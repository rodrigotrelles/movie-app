
// react router
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// styles 
import './index.css';

// components
import App from "./App";
import Movie from "./Movie";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="movie/:movieId" element={<Movie />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);