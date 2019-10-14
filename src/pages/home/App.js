
import React from 'react';
import Header from '@/components/header/header'
import { connect } from 'react-redux'
import { getCashList } from '@/store/cashout/action'
import { List, InputNumber,Checkbox,Button } from 'antd';
import './App.css'

const data = [{
  specs: 'PAiBot(2G/32G/64G)',
  number: 0,
  ischeck: true,
  isdisable: false
},{
  specs: 'PAiPad(2G/32G)',
  number: 3,
  ischeck: true,
  isdisable: false
},{
  specs: 'PAiTouch(2G/32G/64G)',
  number: 4,
  ischeck: true,
  isdisable: false
},{
  specs: 'PAiGoPro(2G/32G)',
  number: 0,
  ischeck: false,
  isdisable: true
},{
  specs: 'PAiBotXXXX(2G/32G)',
  number: 0,
  ischeck: false,
  isdisable: true
}];

class App extends React.Component {
  state = {
    loading: false,
    hasMore: true,
  };

  componentDidMount() {
    // 如果没有请求过则初始化
    if(!this.props.cashInfo.cashList.length){
      this.props.getCashList()
    }
    // this.props.getCashList()
  }

  handleInfiniteOnLoad = () => {
    this.setState({
      loading: true,
    });
    this.setState({
      loading: false,
    });
  };

  onChangeNum = () => {};

  onChange = () => {};

  render() {
    return (
      <div className="App">
        <Header title="首页"></Header>
        <List
      className="myLi"
      size="large"
      itemLayout="horizontal"
      dataSource={data}
      renderItem={item => <List.Item extra={
        <InputNumber size="large" min={item.number} max={100000} defaultValue={item.number} onChange={this.onChangeNum} />
        }>
        <div>
        <Checkbox className="mycheckbox" 
        disabled={item.isdisable}
        checked={item.ischeck} onChange={this.onChange}>{item.specs}</Checkbox>
        </div>
      </List.Item>}
    />
    <div style={{
      padding: '20px 10px',
      textAlign: 'center'
    }}>
    <Button style={{
      width: '100%'
    }} type="primary" size="large">定制以上型号机型</Button>
    </div>
      </div>
    );
  }
}

export default connect(state=>({
    cashInfo: state.cashInfo}),{getCashList})(App);
