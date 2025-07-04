import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import App from "./Home.tsx";
import { Projects } from "./components/projects/Projects.tsx";

import "./index.css";
import { ProjectDetails } from "./components/projects/components/Project/ProjectDetails.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:project" element={<ProjectDetails />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
