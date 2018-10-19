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
        this.props.history.push('/finalizado');
    }
    render(){
        let elapsed = Math.round(this.state.elapsed / 100);
        let seconds = (elapsed / 10).toFixed(1);
        return(
            <div>
                <p> Tiempo {seconds}</p>
            </div>
        )
    }
    render(){
        return(
            <div className="game-container">
                <div className="header">
                    <div className="title-box">
                        <h1>Memoria 2018</h1>
                    </div>
                    <div className="user-info">
                        <div className="user-name">
                            <span>Record:<br/> 20 seg</span>
                        </div>
                        <div className="user-max-score">
                        </div>
                    </div>
                    <div className="user-current-time">
                        <span class="text-3d">50.1</span>
                    </div>
                </div>
                <div className="grid-container">
                    <div className="grid-item">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src="" />
                                </div>
                                <div className="flip-card-back">
                                    <img src="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src="" />
                                </div>
                                <div className="flip-card-back">
                                    <img src="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src="" />
                                </div>
                                <div className="flip-card-back">
                                    <img src="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src="" />
                                </div>
                                <div className="flip-card-back">
                                    <img src="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src="" />
                                </div>
                                <div className="flip-card-back">
                                    <img src="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src="" />
                                </div>
                                <div className="flip-card-back">
                                    <img src="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src="" />
                                </div>
                                <div className="flip-card-back">
                                    <img src="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src="" />
                                </div>
                                <div className="flip-card-back">
                                    <img src="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src="" />
                                </div>
                                <div className="flip-card-back">
                                    <img src="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src="" />
                                </div>
                                <div className="flip-card-back">
                                    <img src="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src="" />
                                </div>
                                <div className="flip-card-back">
                                    <img src="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src="" />
                                </div>
                                <div className="flip-card-back">
                                    <img src="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src="" />
                                </div>
                                <div className="flip-card-back">
                                    <img src="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src="" />
                                </div>
                                <div className="flip-card-back">
                                    <img src="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src="" />
                                </div>
                                <div className="flip-card-back">
                                    <img src="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src="" />
                                </div>
                                <div className="flip-card-back">
                                    <img src="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            // <div>
            //     <Link to="/">Volver</Link>
            //     <p onClick={this.finish}> Terminar </p>
            //     <h2>Jueguito</h2>
            //     <Timer start={Date.now()} />
            // </div>
        )
    }
}
