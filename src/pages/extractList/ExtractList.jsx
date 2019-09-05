import React from 'react';
import ExtractItem from './ExtractItem'
import { Tabs} from 'antd';
import Header from '@/components/header/header'

const { TabPane } = Tabs;
class ExtractList extends React.Component{
  state = {
    pageKey:'1'
  }

  callback = (key) =>{
    console.log(key)
    this.setState({
      pageKey: key
    })
    // this.props.history.push(`/extract/list/${key}`);
  }

  render() {
    return (<div>
      <Header title="我的订单"></Header>
      <Tabs defaultActiveKey={this.state.pageKey} onChange={this.callback}>
      <TabPane tab="已付" key="1">
        {this.state.pageKey === '1' && <ExtractItem pageKey={this.state.pageKey}></ExtractItem>}
      </TabPane>
      <TabPane tab="待反" key="2">
        {this.state.pageKey === '2' && <ExtractItem pageKey={this.state.pageKey}></ExtractItem>}
      </TabPane>
      <TabPane tab="已反" key="3">
        {this.state.pageKey === '3' && <ExtractItem pageKey={this.state.pageKey}></ExtractItem>}
      </TabPane>
      <TabPane tab="已失效" key="4">
        {this.state.pageKey === '4' && <ExtractItem pageKey={this.state.pageKey}></ExtractItem>}
      </TabPane>
    </Tabs>
    </div>)
  } 
}

export default ExtractList;