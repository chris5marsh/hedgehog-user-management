import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import MessageProvider from "./providers/MessageProvider.tsx";

createRoot(document.getElementById("root") as Element).render(
  <StrictMode>
    <MessageProvider>
      <App />
    </MessageProvider>
  </StrictMode>
);
