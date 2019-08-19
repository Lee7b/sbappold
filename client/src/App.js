import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";

class App extends React.Component { 
    render () {
        return (
          <BrowserRouter>
            <Route exact path = "/" component={Home} />
            <Route path = "/contact" component={Contact} />
            <Route path = "/about" component={About} />
            <Route path='/linkedin' component={() => { 
              window.location = ('https://www.linkedin.com/in/samuel-burkett'); 
              return null;
            }}/>
            <Route path='/github' component={() => { 
              window.location = ('https://github.com/Lee7b'); 
              return null;
            }}/>
          </BrowserRouter>
        );
    }
}

export default App;