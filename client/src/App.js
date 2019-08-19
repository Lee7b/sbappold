import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./Pages/Home";
import List from "./Pages/List";

class App extends React.Component { 
    render () {
        return (
          <BrowserRouter>
            <Route exact path = "/" component={Home} />
            <Route path = "/list" component={List} />
          </BrowserRouter>
        );
    }
}

export default App;