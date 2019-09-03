import React,{Component} from 'react';
import {HashRouter,Switch,Route} from 'react-router-dom';
import home from '@/App';
import login from '@/pages/login/Login.jsx';
import extractList from '@/pages/extractList/ExtractList.jsx';

export default class RouteConfig extends Component {
  render(){
    return (
      <HashRouter>
        <Switch>
          <Route path="/" exact component={login}></Route>
          <Route path="/test" component={home}></Route>
          <Route path="/extract/list" component={extractList}></Route>
        </Switch>
      </HashRouter>
    )
  }
}