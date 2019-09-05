import React,{Component} from 'react';
import {HashRouter,Switch,Route} from 'react-router-dom';
import home from '@/App';
import login from '@/pages/login/Login.jsx';
import ExtractList from '@/pages/extractList/ExtractList.jsx';
import cashout from '@/pages/cashout/Cashout.jsx';
import cashlist from '@/pages/cashlist/Cashlist.jsx';

export default class RouteConfig extends Component {
  render(){
    return (
      <HashRouter>
        <Switch>
          <Route path="/" exact component={login}></Route>
          <Route path="/test" component={home}></Route>
          <Route path="/extract/list" component={ExtractList} />
          <Route path="/cash/out" component={cashout} />
          <Route path="/cash/list" component={cashlist} />
        </Switch>
      </HashRouter>
    )
  }
}