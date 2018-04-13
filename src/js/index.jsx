import React from 'react';
import ReactDOM from 'react-dom';
import TimerList from './TimerList';
import LoginApp from './LoginApp';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter basename='/'>
        <div>
            <Switch>
                <Route path='/timerlist' component={TimerList}/>
                <Route path='/' component={LoginApp}/>
            </Switch>
        </div>
    </BrowserRouter>,
    document.getElementById('app'));

