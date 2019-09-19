import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/antd/dist/antd.css';
import Route from './router/';
import {Provider} from 'react-redux';
import store from '@/store/store';
import * as serviceWorker from './serviceWorker';

// 监听state变化
store.subscribe(() => {
  console.log('store发生了变化');
});

const render = Component => {
  ReactDOM.render(
    //绑定redux、热加载
    <Provider store={store}>
        <Component />
    </Provider>,
    document.getElementById('root'),
  )
}

render(Route);
// ReactDOM.render(<Route />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
