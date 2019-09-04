import React , {Component} from 'react';
import { InputNumber,Button,message } from 'antd';
import Header from '@/components/header/header'
import './Cashout.css'

class CashOut extends Component {
  state = {
    money: 0,
    usefulMoney: 800
  };

  onChange = value => {
    this.setState({money: value});
  };

  handleCashout = (e) => {
    let value = e.target.value;
    if(this.state.money <= 0){
      message.error('请输入提现金额')
    }else{
      message.success('提现成功')
      let sub = this.state.usefulMoney - this.state.money;
      this.setState({
        usefulMoney: sub
      })
      value = value.replace(/^0+/,'0');
    }
  };

  render(){
    return (
      <div>
        <Header title="提现"></Header>
        <div>
          <div className="remainder">您当前的可提现金额为：￥{this.state.usefulMoney}</div>
          <div className="cashout">
            <div className="to-cashout">请输入提现金额（元）</div>
            <InputNumber 
              min={1} 
              max={10} 
              onChange={this.onChange} 
              className="input-cashout"       
              defaultValue={0}
              formatter={value => `￥ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}/>
          </div>
          <Button type="primary" size="large" className="cashout-btn" onClick={this.handleCashout}>申请提现</Button>
        </div>
      </div>
    )
  }
}

export default CashOut;
