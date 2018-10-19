import React, { Component } from 'react';
import styled from 'styled-components';
const test = styled.p`
    color: red;
`
export default class Card extends Component {


    render(){
        return(
            <div className="card">
                <test> <p>Hola</p> </test>
            </div>
        )
    }
}