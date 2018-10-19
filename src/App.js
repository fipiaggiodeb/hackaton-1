// react & router
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// views
import Welcome from './components/Welcome';
import Game from './components/Game';
import Finish from './components/Finish';

class App extends Component {
  render(){
    return(
      <Router>
        <div>
          <Route exact path="/" component={Welcome} />
          <Route path="/juego" component={Game} />
          <Route path="/finalizado" component={Finish} />
        </div>
      </Router>
    )
  }
}
export default App;
