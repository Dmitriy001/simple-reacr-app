import React from 'react';
import './timer.css';

class Timer extends React.Component {
    constructor() {
        super();
        this.state = {
            value: 0,
            delta: null,
            tamerId: null
        }
    }

    toStop() {
        this.setState({timerId: clearInterval(this.state.timerId)});
    }

    increment() {
        if (this.checkValue(this.state.delta)) {
            return;
        }

        this.setState({value: this.state.value + this.state.delta,
            timerId: setInterval(()=>this.setState({value: this.state.value * this.state.delta}), 1000)
        });
    }

    decrement() {
        if (this.checkValue(this.state.delta)) {
            return;
        }


        this.setState({value: this.state.value - this.state.delta,
            timerId: setInterval(()=>this.setState({value: this.state.value - this.state.delta}), 1000)})
    }

    checkValue(value) {
        if(isNaN(value) || value == null) {
            alert('Введите целое не нулевое значение')
            return true;
        } else return false;
    }


    handleChange(event) {
        this.setState({delta: parseInt(event.target.value)});
    }

    render () {
        return (
            <div>
                <input id="text" onChange={this.handleChange.bind(this)} style={{borderColor: isNaN(this.state.delta) ? 'red' : ''}}/>
                <input id="inc" value="increment" onClick={this.increment.bind(this)} type="button" disabled={isNaN(this.state.delta) || this.state.timerId != null}/>
                <input id="dec" value="decrement" onClick={this.decrement.bind(this)} type="button" disabled={isNaN(this.state.delta) || this.state.timerId != null}/>
                <span className="num">{this.state.value}</span>
                <input className="stop" value="stop" type="button" onClick={this.toStop.bind(this)}/>
            </div>
        )
    }
}

export default Timer