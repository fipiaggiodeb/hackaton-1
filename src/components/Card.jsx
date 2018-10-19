import React, { Component } from 'react';

export default class Card extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.props.onCardClick(this.props.id);
    }
    toggleFlip (){
        var card = document.getElementById("flipCard");
        card.classList.toggle("flipped-flip-card");
        // var innerCard = document.getElementById("flipCardInner");
        // innerCard.classList.toggle("flipped-flip-card-inner");
    }
    render(){
        return(
            <div className="grid-item">
                <div onClick={ this.toggleFlip } id="flipCard" className="flip-card">
                    <div onClick={ this.handleClick } id="flipCardContent" className="card" className="flip-card-inner">
                        <div className="flip-card-front">
                            front
                        </div>
                        <div className="flip-card-back">
                            back
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
