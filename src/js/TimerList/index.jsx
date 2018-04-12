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

    removeTimer() {

    }

    render() {
        const list = [];
        for (let i = this.state.numberOfTimers; i > 0; i--) {
            let elemlist = <li key={i.toString()}><Timer/><input value="delete" type="button" onClick={()=>{document.getElementById('timerlist').removeChild(document.querySelector(`[key = "${i.toString()}"]`))}}/></li>;
            list.push(elemlist);
        }
        return (
            <div>
                <input type='button' onClick={this.handlerClick.bind(this)} value='Add Timer'/>
                <ul id="timerlist">
                    {list}
                </ul>
            </div>
        )
    }
}

export default TimerList





