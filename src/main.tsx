import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./HomePage.tsx";
import "./styles.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import WorkInProgress from "./Pages/WorkInProgress.tsx";
import { AnimatePresence, motion } from "framer-motion";
import SettingsGeneralPage from "./Pages/SettingsGeneral.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <AnimatePresence mode={"popLayout"}>
        <motion.main
          key={location.pathname}
          className="main__container"
          initial={{ y: "4%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1.0 }}
          exit={{ y: "-2%", opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <Routes location={location}>
            <Route index element={<HomePage />} />
            <Route path="WorkInProgress" element={<WorkInProgress />} />
            <Route path="Settings/General" element={<SettingsGeneralPage />} />
          </Routes>
        </motion.main>
      </AnimatePresence>
    </div>
  );
}
