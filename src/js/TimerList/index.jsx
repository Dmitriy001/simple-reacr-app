import React from 'react';
import Timer from '../Timer';

class TimerList extends React.Component {
    constructor() {
        super();
        this.state = {
            numberOfTimers: 0
        }
    }

    handlerClick() {
        this.setState({
            numberOfTimers: this.state.numberOfTimers + 1
        })

    }

    render() {
        const list = [];
        for (let i = this.state.numberOfTimers; i <= this.state.numberOfTimers; i--) {
            let elemlist = <li key={i.toString()}><Timer/></li>;
            list.push(elemlist)
        }
        return (
            <div>
                <input type='button' onClick={this.handlerClick.bind(this)} value='Add Timer'/>
                <ul>
                    {list}
                </ul>
            </div>
        )
    }
}

export default TimerList





