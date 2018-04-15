import React from 'react'
import axios from 'axios'

class Weather extends React.Component{
    constructor(props) {
        super(props);
    }
    Axios() {
        axios.get('https://api.openweathermap.org/data/2.5/weather?q=London&appid=967e07f7bd47f1096a587f111b2ffd28')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        this.Axios();
        return (
            <div></div>
        )


    }
}


export default Weather