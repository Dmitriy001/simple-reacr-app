import React from 'react';
import ReactDOM from 'react-dom';
import TimerList from './TimerList';
import LoginApp from './LoginApp';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Timer from "./Timer";

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Switch>
                <Route path='/login' component={LoginApp}/>
                <Route path='/timerlist' component={TimerList}/>
                <Route path="/timer" component={Timer}/>
            </Switch>
        </div>
    </BrowserRouter>,
    document.getElementById('app'));

