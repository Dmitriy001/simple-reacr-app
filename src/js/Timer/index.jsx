import React from 'react'

class Timer extends React.Component {
    constructor() {
        super();
        this.state = {
            value: 0,
            delta: 0,
            tamerId: 0
        }
    }

    toStop() {
        this.setState({timerId: clearInterval(this.state.timerId)});
        document.getElementById('dec').disabled = false;
        document.getElementById('inc').disabled = false;
    }

    increment() {
        if (!this.checkInputValue(this.state.delta)) {
            return false;
        }
        this.setState({value: this.state.value + this.state.delta,
            timerId: setInterval(()=>this.setState({value: this.state.value * this.state.delta}), 1000)
        });
        document.getElementById('dec').disabled = true;
        document.getElementById('inc').disabled = true;
    }

    decrement() {
        if (!this.checkInputValue(this.state.delta)) {
            return false;
        }
        this.setState({value: this.state.value - this.state.delta})
    }

    handleChange(event) {
        document.getElementById('dec').disabled = false;
        document.getElementById('inc').disabled = false;
        this.setState({delta: parseInt(event.target.value)});
    }

    checkInputValue(value) {
        if(isNaN(value) || !value) {
            document.getElementById('dec').disabled = true;
            document.getElementById('inc').disabled = true;
            document.getElementById('text').setAttribute('style', "border-color: red");
            alert('Введите целое не нудевое число');
            return false;
        } else {
            document.getElementById('dec').disabled = false;
            document.getElementById('inc').disabled = false;
            document.getElementById('text').removeAttribute('style');
            return true
        }
    }


    render () {
        return (
            <div>
                <input id="text" onChange={this.handleChange.bind(this)}/>
                <input id="inc" value="increment" onClick={this.increment.bind(this)} type="button"/>
                <input id="dec" value="decrement" onClick={this.decrement.bind(this)} type="button"/>
                <span className="num">{this.state.value}</span>
                <input className="stop" value="stop" type="button" onClick={this.toStop.bind(this)}/>
            </div>
        )
    }
}

export default Timer