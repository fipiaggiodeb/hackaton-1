import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Cards from "../resources/cards.json";

// Components
import Timer from './Timer';
import Card from './Card';

export default class Game extends Component {
    constructor(props){
        // Por qué usar super: http://cheng.logdown.com/posts/2016/03/26/683329
        super(props);
        // Hace falta bindear this a los métodos que lo van a usar internamente
        this.finish = this.finish.bind(this);
        this.click = this.click.bind(this);
        // Preset de las variables del state
        this.state = {
            start: new Date(),
            step: 0,
            showCards : false
        }
    }

    /**
     * Cuando clickeas una card
     * @param {number} id
     */
    click(id){
        console.log("CLICK", id);
    }

    /**
     * Cuando el jugador gana y se cambia de vista
     */
    finish(){
        // Calculo el puntaje
        let elapsed = Math.round(  ( this.state.start - new Date() )  / 100 );
        let finish = Math.abs( (elapsed / 10).toFixed(1) );
        // Todo: guardar finish score
        console.log( finish );
        // Redierct
        this.props.history.push('/finalizado');
    }

    /**
     * Cuando se ejecuta el render
     */
    componentDidMount(){

    }

    render(){
        let elapsed = Math.round(this.state.elapsed / 100);
        let seconds = (elapsed / 10).toFixed(1);
        return(
            <div className="game-container">
                <div className="header">
                    <div className="title-box">
                        <h1>Memoria 2018</h1>
                        <Link to="/">Volver</Link>
                        <p onClick={this.finish}> Terminar </p>
                    </div>
                    <div className="user-info">
                        <div className="user-name">
                            <span>Record:<br/> 20 seg</span>
                        </div>
                        <div className="user-max-score">
                        </div>
                    </div>
                    <div className="user-current-time">
                        <span class="text-3d">
                            <Timer start={Date.now()} />
                        </span>
                    </div>
                </div>
                <div className="grid-container">
                    {
                        Cards.map( card => (
                            <Card
                            key={card.id}
                            id={card.id}
                            idGroup={card.idGroup}
                            onCardClick={this.click} />
                            )
                        )
                    }
                </div>
            </div>
        )
    }
}
