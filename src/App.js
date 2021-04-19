import './App.css';
import React from 'react';
import {Route,BrowserRouter} from "react-router-dom";
import {Menu} from "./components/Menu";
import {MainPage} from "./components/MainPage";
import {About} from "./components/About";
import {Contacts} from "./components/Contacts";

function App() {
  return (<div>
      <BrowserRouter>
          <Route path="/" render={()=><Menu/>} />
          <Route exact path="/" render={()=><MainPage/>} />
          <Route path="/about" render={()=><About/>} />
          <Route path="/contacts" render={()=><Contacts/>} />
      </BrowserRouter>
  </div>
  );
}

export default App;
