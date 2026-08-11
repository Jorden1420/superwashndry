import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./routes";
import "./styles.css";

const root = createRoot(document.getElementById("root"));

root.render(
  <Suspense fallback={<div className="page-loader">Loading…</div>}>
    <Router>
      <Routes />
    </Router>
  </Suspense>
);
