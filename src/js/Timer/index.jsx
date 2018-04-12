import React from 'react'

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
        if(isNaN(this.state.delta) || this.state.delta == null) {
            alert('Введите целое не нулевое значение')
        }
        this.setState({value: this.state.value + this.state.delta,
            timerId: setInterval(()=>this.setState({value: this.state.value * this.state.delta}), 1000)
        });
    }

    decrement() {
        if(isNaN(this.state.delta) || this.state.delta == null) {
            alert('Введите целое не нулевое значение')
        }
        this.setState({value: this.state.value - this.state.delta})
    }

    handleChange(event) {
        this.setState({delta: parseInt(event.target.value)});
    }

    render () {
        return (
            <div>
                {isNaN(this.state.delta) ?
                    <input id="text" onChange={this.handleChange.bind(this)} style={{borderColor: 'red'}}/>
                    :
                    <input id="text" onChange={this.handleChange.bind(this)}/>}
                    <input id="inc" value="increment" onClick={this.increment.bind(this)} type="button" disabled={isNaN(this.state.delta) || this.state.timerId != null}/>
                    <input id="dec" value="decrement" onClick={this.decrement.bind(this)} type="button" disabled={isNaN(this.state.delta) || this.state.timerId != null}/>
                <span className="num">{this.state.value}</span>
                <input className="stop" value="stop" type="button" onClick={this.toStop.bind(this)}/>
            </div>
        )
    }
}

export default Timer