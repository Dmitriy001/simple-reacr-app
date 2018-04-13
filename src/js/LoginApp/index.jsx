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
            e.preventDefault();
        }

    }

    handleInputChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        return (
            <div>
                <form action='' onSubmit={this.handleSubmit.bind(this)}>
                    <input type="email" name="email" onChange={this.handleInputChange.bind(this)}
                           style={{borderColor: !this.state.email ? 'red' : ''}}/>
                    <input type="password" name="password" onChange={this.handleInputChange.bind(this)}
                           style={{borderColor: !this.state.password ? 'red' : ''}}/>
                    <input type="submit" value="Submit"/>
                    <Button/>
                </form>
            </div>
        )
    }
}


const Button = () => (
    <Link to="/timer"><button>use timer now</button></Link>
);

export default LoginApp