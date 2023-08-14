import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

import { useEffect,useRef } from "react";



function App() {

  return (
    
<div className="">
  <Navbar/>
  <Main/>
  {/* <Skills/> */}
  <Projects/>
  <Contact/>
</div>
  );
}

export default App;
