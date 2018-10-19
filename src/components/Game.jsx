import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Timer from './Timer';

export default class Game extends Component {
    constructor(props){
        // Por qué usar super: http://cheng.logdown.com/posts/2016/03/26/683329
        super(props);
        // Hace falta bindear this a los métodos que lo van a usar internamente
        this.finish = this.finish.bind(this);
        // Preset de las variables del state
        this.state = {
            start: new Date()
        }
    }
    finish(){
        // Calculo el puntaje
        let elapsed = Math.round(  ( this.state.start - new Date() )  / 100 );
        let finish = Math.abs( (elapsed / 10).toFixed(1) );
        // Todo: guardar finish score
        console.log( finish );
        // Redierct
        this.props.history.push('/finalizado')
    }
    render(){
        return(
            <div>
                <Link to="/">Volver</Link>
                <p onClick={this.finish}> Terminar </p>
                <h2>Jueguito</h2>
                <Timer start={Date.now()} />
            </div>
        )
    }
}