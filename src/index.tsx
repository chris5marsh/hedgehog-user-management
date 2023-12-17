import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MessageProvider from "./providers/MessageProvider.tsx";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root") as Element).render(
  <StrictMode>
    <MessageProvider>
      <App />
    </MessageProvider>
  </StrictMode>
);
