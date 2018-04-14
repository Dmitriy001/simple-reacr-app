import React from 'react'
import './LoginApp.css'
import {Link} from 'react-router-dom'

class LoginApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: true,
            password: true
        }
    }

    handleSubmit(e) {
        if (!this.state.password || !this.state.email || this.state.password === true || this.state.email === true){
            e.preventDefault();
            alert('Заполните все поля');
        } else {
            this.props.history.push('./timerlist');
            e.preventDefault();
        }

    }

    handleInputChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }


    render() {
        return (
                <form action='' onSubmit={this.handleSubmit.bind(this)}>
                    <input type="email" name="email" onChange={this.handleInputChange.bind(this)}
                           style={{borderColor: !this.state.email ? 'red' : ''}}/>
                    <input type="password" name="password" onChange={this.handleInputChange.bind(this)}
                           style={{borderColor: !this.state.password ? 'red' : ''}}/>
                    <Link to='./timerlist'><input type="submit" value="Submit"/></Link>
                </form>
        )
    }
}

export default LoginApp