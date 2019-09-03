import React from 'react';
import ExtractItem from './ExtractItem'
import { Tabs,PageHeader } from 'antd';
import {Route} from 'react-router-dom';

const { TabPane } = Tabs;

function initList(props){

  function goBack(){
    props.history.push('/');
  }

  function callback(key) {
    console.log(key)
    props.history.push(`/extract/list/${key}`);
  }

  return (<div>
    <PageHeader onBack={goBack} title="我的订单"/>
    <Tabs defaultActiveKey={`${props.location.pathname.split('/')[3]}`} onChange={callback}>
    <TabPane tab="已付" key="1">
      <Route path={`${props.match.path}/1`} component={ExtractItem} />
    </TabPane>
    <TabPane tab="待反" key="2">
      <Route path={`${props.match.path}/2`} component={ExtractItem} />
    </TabPane>
    <TabPane tab="已反" key="3">
      <Route path={`${props.match.path}/3`} component={ExtractItem} />
    </TabPane>
    <TabPane tab="已失效" key="4">
      <Route path={`${props.match.path}/4`} component={ExtractItem} />
    </TabPane>
  </Tabs>
  </div>)
}

export default initList;