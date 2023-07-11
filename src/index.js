import React from "react";
import { createRoot } from "react-dom/client";
import LightRoom from "./LightRoom";
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LightRoom isLight={true} />
  </React.StrictMode>
);
