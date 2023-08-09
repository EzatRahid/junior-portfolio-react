import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

import { useEffect,useRef } from "react";



function App() {
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          // entry.target.classList.remove('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hide');
    hiddenElements.forEach((el) => observer.current.observe(el));

    // Clean up the observer when component unmounts
    return () => {
      observer.current.disconnect();
    };
  }, []);

  return (
    
<div className="">
  <Navbar/>
  <Main/>
  <Skills/>
</div>
  );
}

export default App;
