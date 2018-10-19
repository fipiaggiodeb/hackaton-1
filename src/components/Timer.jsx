import React, { Component } from 'react';

export default class Timer extends Component {
    constructor(props){
        super(props);
        this.tick = this.tick.bind(this);
        this.state = {
            elapsed : 0
        }
    }
    componentDidMount(){
        // Se llama cuando se hace el render
        // En ese momento seteo un intervalo
        this.timer = setInterval(this.tick, 50);
    }
    componentWillUnmount(){
        // Limpio el intervalo cuando el se borra el componente
        clearInterval(this.timer);
    }
    tick(){
        this.setState({ elapsed: new Date() - this.props.start })
    }
    render(){
        let elapsed = Math.round(this.state.elapsed / 100);
        let seconds = (elapsed / 10).toFixed(1);
        return(
            <div>
                <p>{seconds}</p>
            </div>
        )
    }
}
