import React, { Component } from 'react';

export default class Card extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.props.onCardClick(this.props.id);
    }
    render(){
        return(
            <div onClick={ this.handleClick } className="card">
                <p>Hola</p>
            </div>
        )
    }
}