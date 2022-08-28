import ReactDOM from "react-dom/client";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Publications from "./pages/Publications";
import Team from "./pages/Team";
import TeamMemberPage from "./pages/TeamMemberPage";
import AlertTemplate from "react-alert-template-basic";
import { Provider as AlertProvider } from "react-alert";

import "./tailwind.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AlertProvider template={AlertTemplate}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="projetos" element={<Projects />} />
            <Route path="projeto/:projectTitle" element={<Project />} />
            <Route path="publicacoes" element={<Publications />} />
            <Route path="equipe" element={<Team />} />
            <Route path="equipe/:memberName" element={<TeamMemberPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AlertProvider>
  </React.StrictMode>
);
