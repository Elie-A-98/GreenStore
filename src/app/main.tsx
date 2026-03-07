import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../design/styling/index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";

async function startMsw() {
  const { worker } = await import("../api/msw/browser.ts");
  return worker.start({
    serviceWorker: {
      url: `${import.meta.env.BASE_URL}mockServiceWorker.js`,
    },
  });
}

startMsw().then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <App />
      </BrowserRouter>
    </StrictMode>,
  );
});
