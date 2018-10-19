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
                "card " + 
                (this.props.toggle && !this.props.freeze ? 'show ' : 'hidden ') + 
                (this.props.freeze ? 'freeze' : '')
            }>
                <p>Hola</p>
            </div>
        )
    }
}