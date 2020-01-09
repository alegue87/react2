import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home/home';
import Login from './components/login/login';
import MainTemplate from './components/mainLayout/template/mainTemplate';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <BrowserRouter>
        <MainTemplate>
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/login' component={Login}></Route>
          </Switch>
        </MainTemplate>  
      </BrowserRouter>
    )
  }
}

export default App;

