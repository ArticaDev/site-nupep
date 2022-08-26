import ReactDOM from "react-dom/client";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Publications from "./pages/Publications";
import Team from "./pages/Team";
import "./tailwind.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="projetos" element={<Projects />} />
          <Route path="projeto/:projectTitle" element={<Project />} />
          <Route path="publicacoes" element={<Publications />} />
          <Route path="equipe" element={<Team />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
