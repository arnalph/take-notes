import './App.css';
import Home from './pages/Home.js';
import Editor from './pages/Editor.js';
import Note from './pages/Note.js'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={ Home }></Route>
            <Route exact path="/new" component={ Editor }></Route>
            <Route path="/note/:noteID" component={ Note }></Route>
          </Switch>
        </Router>
      </div>
    );
  }
  
}

export default App;
