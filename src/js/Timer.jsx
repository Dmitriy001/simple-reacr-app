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
        this.setState({timerId: clearInterval(this.state.timerId)})
    }

    increment() {
        if (!this.state.delta) {
            alert('Введите целое не нудевое число');
            return false;
        }
        this.setState({value: this.state.value + this.state.delta,
            timerId: setInterval(()=>this.setState({value: this.state.value * this.state.delta}), 1000)
        })
    }

    decrement() {
        this.setState({value: this.state.value - this.state.delta})
    }

    handleChange(event) {
        this.setState({delta: parseInt(event.target.value)});
    }


    render () {
        const value = this.state.value;
        return (
            <div>
                <input className="text" onChange={this.handleChange.bind(this)}/>
                <input className="inc" value="increment" onClick={this.increment.bind(this)} type="button"/>
                <input className="inc" value="decrement" onClick={this.decrement.bind(this)} type="button"/>
                <span className="num">{this.state.value}</span>
                <input className="stop" value="stop" type="button" onClick={this.toStop.bind(this)}/>
            </div>
        )
    }
}

export default Timer