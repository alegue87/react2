import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home/home';
import Login from './components/login/login';
import MainTemplate from './components/mainLayout/template/mainTemplate';
import Dashboard from './components/dashboard/dashboard';
import LoggedTemplate from './components/mainLayout/template/loggedTemplate';
import History from './components/history/history';

class App extends Component {
  constructor(props) {
    super(props);


    if(window.location.pathname == '/' || window.location.pathname == '/login'){
      this.container = (
        <MainTemplate>
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/login' component={Login}></Route>
          </Switch>
        </MainTemplate>
      );
    }
    else{
      this.container = (
        <LoggedTemplate>
          <Switch>
            <Route exact path='/dashboard' component={Dashboard}></Route>
            <Route path='/history' component={History}></Route>
          </Switch>
        </LoggedTemplate>
      );
    }
  }
  render(){
    return(
      <BrowserRouter>
          {this.container}
      </BrowserRouter>
    )
  }
}

export default App;

