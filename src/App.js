import React, { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";
import Meeting from "./components/Meeting";

function App() {
  const [showMeeting, setShowMeeting] = useState(true);

  useEffect(() => {
    // After 6 seconds, hide the meeting component
    const timer = setTimeout(() => {
      setShowMeeting(false);
    }, 5000);

    // Clean up the timer when the component unmounts or the effect runs again
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App  overflow-hidden relative bg-[#fafafa]">
      {showMeeting && <Meeting />}
      {!showMeeting && (
        <>
          <Navbar />
          <Home />
          <Skills />
          <Projects />
          <About />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;

