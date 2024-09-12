import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "App.tsx";
import "index.css";

import TodoProvider from "contexts/TodoProvider.tsx";
import ModalProvider from "contexts/ModalProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TodoProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </TodoProvider>
  </StrictMode>
);
