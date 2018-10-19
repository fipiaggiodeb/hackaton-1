// react & router
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// views
import Welcome from './components/Welcome';
import Game from './components/Game';
import Finish from './components/Finish';

class App extends Component {
  render(){
    return(
      <Router>
        <main>
          <Route exact path="/" component={Welcome} />
          <Route path="/juego" component={Game} />
          <Route path="/finalizado" component={Finish} />
        </main>
      </Router>
    )
  }
}
export default App;
