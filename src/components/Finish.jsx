import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Finish extends Component {
    render(){
        return(
            <div>
                <Link to="/">Volver a empezar</Link>
                <h2>Terminaste</h2>
            </div>
        )
    }
}