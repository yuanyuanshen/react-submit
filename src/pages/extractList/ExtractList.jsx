import React from 'react';
import ExtractItem from './ExtractItem'
import { Tabs} from 'antd';
import {Switch,Route} from 'react-router-dom';
import Header from '@/components/header/header'

const { TabPane } = Tabs;

function initList(props){

  function callback(key) {
    console.log(key)
    props.history.push(`/extract/list/${key}`);
  }

  return (<div>
    <Header title="我的订单"></Header>
    <Tabs defaultActiveKey={`${props.location.pathname.split('/')[3]}`} onChange={callback}>
    <TabPane tab="已付" key="">
      <Route path={`/extract/list`} component={ExtractItem} />
    </TabPane>
    <TabPane tab="待反" key="2">
      <Route path={`/extract/list/2`} component={ExtractItem} />
    </TabPane>
    <TabPane tab="已反" key="3">
      <Route path={`/extract/list/3`} component={ExtractItem} />
    </TabPane>
    <TabPane tab="已失效" key="4">
      <Route path={`/extract/list/4`} component={ExtractItem} />
    </TabPane>
  </Tabs>
  </div>)
}

export default initList;