import React from 'react'
import './LoginApp.css'
import { Route, Link, Switch } from 'react-router-dom'
import TimerList from '../TimerList';
import createHistory from "history/createBrowserHistory"

class LoginApp extends React.Component {
    constructor() {
        super();
        this.state = {
            email: true,
            password: true
        }
    }

    handleSubmit(e) {
        if (!this.state.password || !this.state.email || this.state.password === true || this.state.email === true){
            e.preventDefault();
            alert('Заполните все поля');
            return false;
        } else {
            const history = createHistory();
            history.push('/timerlist');
        }

    }

    handleInputChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        return (
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="email" name="email" onChange={this.handleInputChange.bind(this)}
                           style={{borderColor: !this.state.email ? 'red' : ''}}/>
                    <input type="password" name="password" onChange={this.handleInputChange.bind(this)}
                           style={{borderColor: !this.state.password ? 'red' : ''}}/>
                    <input type="submit" value="Submit"/>
                </form>
        )
    }
}



export default LoginApp