import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Game extends Component {
    render(){
        return(
            <div>
                <Link to="/">Volver</Link>
                <h2>Jueguito</h2>
            </div>
        )
    }
}