import React , {Component} from 'react';
import { InputNumber,Button } from 'antd';
import Header from '@/components/header/header'
import './Cashout.css'

function onChange(value) {
  console.log('changed', value);
}

export default class CashOut extends Component {
  render(){
    return (
      <div>
        <Header title="提现"></Header>
        <div>
          <div className="remainder">您当前的可提现金额为：￥800</div>
          <div className="cashout">
            <div className="to-cashout">请输入提现金额（元）</div>
            <InputNumber 
              min={1} max={10} 
              defaultValue={3} 
              onChange={onChange} 
              className="input-cashout"       
              defaultValue={0}
              min={0}
              max={100}
              formatter={value => `￥ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}/>
          </div>
          <Button type="primary" size="large" className="cashout-btn">申请提现</Button>
        </div>
      </div>
    )
  }
}
