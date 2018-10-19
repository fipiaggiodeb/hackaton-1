import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Game extends Component {
    render(){
        return(
            <div>
                <Link to="/juego">Comenzar</Link>
                <h2>Home</h2>
            </div>
        )
    }
}