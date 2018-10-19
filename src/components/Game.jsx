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
            selected : ''
        }
    }

    /**
     * Cuando clickeas una card
     * @param {number} id
     */
    click(id, toggle, idGroup, freeze){
        // Evito clickear sobre las que ya estan dadas vueltas
        if(freeze){
            return false;
        }
        // Todas las cards
        let cards = this.state.cards;
        if( this.state.step === 1 ){
            // Si ya seleccionó 2 reseteo
            this.setState({ step : 0 });
            // Si no la seleccioné antes la doy vuelta
            cards.map( card => !card.toggle && card.id === id ? card.toggle = true : card );
            // Analizo si es distinta a la anterior
            if( this.state.selected !== idGroup ){
                // Si es distinta la muestro por 500ms y lueg reseteo todo
                setTimeout(function(){
                    cards.map( card => card.toggle = false );
                    this.setState({cards : cards });
                }.bind(this), 500);
            }else{
                // Si son iguales las marco como freezed
                cards.map( card => card.idGroup === idGroup ? card.freeze = true : card );
                this.setState(
                    {cards : cards },
                    () => this.isFinish() && this.finish()
                );

            }
        }else if(!toggle){
            // Sino verifico que la tarjeta no esté en toggle
            cards.map( card => !card.toggle && card.id === id ? card.toggle = true : card );
            // actualizo
            this.setState({ step: this.state.step + 1 });
            this.setState({ selected :  idGroup });
            this.setState({ cards : cards });
        }
    }

    /**
     * Cuando el jugador gana y se cambia de vista
     */
    finish(){
        let cards = this.state.cards;
        cards.map( card => card.freeze = false );
        cards.map( card => card.toggle = false );
        this.setState({cards: cards, selected: '', step: 0});
        // Calculo el puntaje
        let elapsed = Math.round(  ( this.state.start - new Date() )  / 100 );
        let finish = Math.abs( (elapsed / 10).toFixed(1) );
        // Todo: guardar finish score
        console.log( finish );
        // Redierct
        this.props.history.push('/finalizado');
    }

    /**
     * Chequea si ya ganó
     */
    isFinish(){
        return this.state.cards.every( card => card.freeze );
    }

    /**
     * Cuando se ejecuta el render
     */
    componentDidMount(){
        this.setState({ cards: Cards })
    }

    render(){
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
                        <span className="text-3d">
                            <Timer start={this.state.start} />
                        </span>
                    </div>
                </div>
                <div className="grid-container">
                    {
                        Cards.map( card => (
                            <Card
                                key={card.id}
                                id={card.id}
                                toggle={card.toggle}
                                freeze={card.freeze}
                                idGroup={card.idGroup}
                                cardBg={card.background} 
                                onCardClick={this.click} />
                            )
                        )
                    }
                </div>
            </div>
        )
    }
}
