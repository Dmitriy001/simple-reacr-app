import React from 'react';
import ReactDOM from 'react-dom';
import TimerList from './TimerList'
import LoginApp from './LoginApp'
import { BrowserRouter,Route , Switch} from 'react-router-dom'





ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path='/timerlist' component={TimerList} />
            <Route path='/login' component={LoginApp}/>
        </Switch>
        <LoginApp />
    </BrowserRouter>,
    document.getElementById('app'));

