import React from 'react'
import './LoginApp.css'

class LoginApp extends React.Component {
    constructor() {
        super();
        this.state = {
            email: true,
            password: true
        }
    }

    handleSubmit(e) {
        if (!this.state.password || !this.state.email || this.state.password=== true || this.state.email === true){
            e.preventDefault();
            alert('Заполните все поля')
        }

    }

    handleChangeEmail(event) {
        this.setState({email: event.target.value});

    }

    handleChangePass(event) {
        this.setState({password: event.target.value});

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input type="email" onChange={this.handleChangeEmail.bind(this)} style={{borderColor: !this.state.email ? 'red' : ''}}/>
                <input type="password" onChange={this.handleChangePass.bind(this)} style={{borderColor: !this.state.password ? 'red' : ''}}/>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

export default LoginApp