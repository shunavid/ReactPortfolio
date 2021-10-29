import Sidebar from "./sidebar/Sidebar";
import Main from "./components/main/Main";
import { Switch , Route } from "react-router-dom";
import "./App.css";
// import { ImBrightnessContrast } from 'react-icons/im';
// import { ImSwitch } from 'react-icons/im';
// import Home from "./components/home/Home";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact";


function App() {
  return (
    <div className="App">
      <Sidebar />
      
      <div className="main-container">
     
       {/* <div className="dark-mode">
         <div className="left-mode"><ImBrightnessContrast size="25" /></div>
         <div className="right-mode"><ImSwitch size="18" /></div>
       </div> */}
       <div className="lines">
          <line className="line-1"></line>
          <line className="line-2"></line>
          <line className="line-3"></line>
          <line className="line-4"></line>
        </div>
       
    
        <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route  path="/contact">
          <Contact />
        </Route>
      </Switch>
     
      </div>
         
     
    </div>
  );
}

export default App;
