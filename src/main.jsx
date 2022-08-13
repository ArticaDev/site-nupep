import ReactDOM from "react-dom/client";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Publications from "./pages/Publications";
import Team from "./pages/Team";
import "./tailwind.css";
import { Helmet } from "react-helmet";
import favicon from "./assets/favicon.svg";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Helmet>
      <meta charSet="utf-8" />
      <title>NUPEP - Núcleo de Pesquisa em Eletrônica de Potência</title>
      <link rel="canonical" href="http://www.nupep.feelt.ufu.br/" />
      <link rel="icon" type="image/svg+xml" href={favicon} />
    </Helmet>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="projetos" element={<Projects />} />
          <Route path="publicacoes" element={<Publications />} />
          <Route path="equipe" element={<Team />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
