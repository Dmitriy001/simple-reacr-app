import React from 'react';
import axios from 'axios';
import './weather.css';

class Weather extends React.PureComponent{
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleChange(event) {
        this.setState({city: event.target.value});
    };

    handleClick() {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=967e07f7bd47f1096a587f111b2ffd28`)
            .then((response) => {
                const obj = JSON.parse(response.request.response);
                this.setState({
                    name: obj.name,
                    temp: Math.round(obj.main.temp-274.15),
                    weather: obj.weather[0].main.toLowerCase()
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    render() {
        let icon = this.state.weather;
        return (
            <div>
                <input placeholder="City" onChange={this.handleChange.bind(this)}/>
                <input type="button" value="Show" onClick={this.handleClick.bind(this)}/>
                <p>{this.state.name}</p>
                <span>{this.state.temp}&deg;</span>
                <div className={icon}></div>
                <p>{this.state.weather}</p>
            </div>
        )
    }
}

export default Weather
