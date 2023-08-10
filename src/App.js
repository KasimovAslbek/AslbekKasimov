import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";



function App() {
  return (
    <div className="App  overflow-hidden relative bg-[#fafafa]">
        <Navbar/>
        <Home/>
        <Skills/>
        <Projects/>
        <About/>
        <Footer/>
    </div>
  );
}

export default App;
