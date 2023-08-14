import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

import { useEffect,useRef } from "react";



function App() {

  return (
    
<div className="">
  <Navbar/>
  <Main/>
  <Skills/>
  <Projects/>
</div>
  );
}

export default App;
