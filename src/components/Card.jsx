import React, { Component } from 'react';

export default class Card extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            toggle : false
        }
    }
    handleClick(){
        this.props.onCardClick(this.props.id, this.props.toggle, this.props.idGroup, this.props.freeze);
    }
    render(){
        return(
            <div 
            onClick={ this.handleClick } 
            className={ 
                "grid-item " + 
                (this.props.toggle && !this.props.freeze ? 'show ' : 'hidden ') + 
                (this.props.freeze ? 'freeze' : '')}
            >
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            front
                        </div>
                        <div className="flip-card-back">
                            { this.props.idGroup }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
