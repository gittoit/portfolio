import React, { useState, useEffect } from "react";
import { Navigation, Main, Expertise, Timeline, Project, Contact, Footer } from "./components";
import FadeIn from "./components/FadeIn";
import MouseTrail from "./components/MouseTrail";
import "./index.scss";

function App() {
  const [mode, setMode] = useState<string>("dark");

  const handleModeChange = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
      <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
      <FadeIn transitionDuration={700}>
        <Main />
        <Expertise />
        <Timeline />
        <Project />
        <Contact />
      </FadeIn>
      <Footer />

      {/* Add the mouse trail overlay at the end */}
      <MouseTrail />
    </div>
  );
}

export default App;
