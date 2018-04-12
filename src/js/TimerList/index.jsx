import React from 'react';
import Timer from '../Timer';

class TimerList extends React.Component {
    constructor() {
        super();
        this.state = {
            numberOfTimers: 0,
            removeElem: null
        }
    }

    handlerClick() {
        this.setState({
            numberOfTimers: this.state.numberOfTimers + 1
        })
    }


    render() {
        const list = [];
        for (let i = this.state.numberOfTimers; i > 0; i--) {
            if(this.state.removeElem != i) {
                let elemlist = <li key={i.toString()}><Timer/><input value="delete" type="button" onClick={() => this.setState({numberOfTimers: this.state.numberOfTimers-1, removeElem: i})}/></li>;
                list.push(elemlist);}
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





