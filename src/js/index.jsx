import React from 'react';
import ReactDOM from 'react-dom';
import TimerList from './TimerList'
import LoginApp from './LoginApp'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <LoginApp />
    </BrowserRouter>,
    document.getElementById('app'));

