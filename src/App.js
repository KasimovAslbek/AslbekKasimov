import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";



function App() {
  return (
    <div className="App  overflow-hidden relative bg-[#fafafa]">
        <Navbar/>
        <Home/>
        <Skills/>
        
        <Projects/>
        
        
    </div>
  );
}

export default App;
