
import React from 'react';
import Header from '@/components/header/header'
import { connect } from 'react-redux'
import { getCashList } from '@/store/cashout/action'
import { List, InputNumber,Checkbox,Button } from 'antd';
import './App.css'
import {cloneDeep} from 'lodash'

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
    spaceList: cloneDeep(data),
    loading: true,
  };

  componentDidMount() {
  }

  onChangeNum = (index,value) => {
    const tempData = this.state.spaceList;
    tempData[index].number = value;
    this.setState({
      spaceList:[...tempData]
    });
  };

  submitSpace = () =>{
    this.setState({
      spaceList:cloneDeep(data)
    },()=>{
      console.log(this.state.spaceList);
    });
  };

  render() {
    return (
      <div className="App">
        <Header title="产品规格"></Header>
        <List
      className="myLi"
      size="large"
      itemLayout="horizontal"
      dataSource={this.state.spaceList}
      renderItem={(item,index) => <List.Item extra={
        <InputNumber size="large" min={item.number} max={100000} defaultValue={item.number} value={item.number} onChange={this.onChangeNum.bind(this,index)} />
        }>
        <div>
        <Checkbox className="mycheckbox" 
        disabled={true}
        checked={item.ischeck}>{item.specs}</Checkbox>
        </div>
      </List.Item>}
    />
    <div style={{
      padding: '20px 10px',
      textAlign: 'center'
    }}>
    <Button style={{
      width: '100%'
    }} type="primary" size="large" onClick={this.submitSpace}>定制以上型号机型</Button>
    </div>
      </div>
    );
  }
}

export default connect(state=>({
    cashInfo: state.cashInfo}),{getCashList})(App);
