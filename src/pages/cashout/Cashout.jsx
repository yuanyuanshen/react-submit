import React , {Component} from 'react';
import { InputNumber,Button,message } from 'antd';
import Header from '@/components/header/header'
import './Cashout.css'
import Dialog from '@/components/dialog/dialog'

class CashOut extends Component {
  state = {
    money: 0,
    usefulMoney: 800,
    visible: false
  };

  onChange = (value) => {
    this.setState({money: value});
  };

  transferVisible(visible) {
    this.setState({
      visible
    });
  }

  handleCashout = (e) => {
    if(this.state.money <= 0){
      message.error('请输入提现金额')
    }else{
      // message.success('提现成功')
      let sub = this.state.usefulMoney - this.state.money;
      this.setState({
        usefulMoney: sub,
        money: 0,
        visible: true
      })
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
              min={0} 
              max={200} 
              onChange={this.onChange} 
              className="input-cashout"       
              defaultValue={0}
              value={this.state.money}
              formatter={value => `￥ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}/>
          </div>
          <Button type="primary" size="large" className="cashout-btn" onClick={this.handleCashout}>申请提现</Button>
        </div>
        <Dialog title="提现成功" des="您以提现成功，可到提现记录中查看" visible={this.state.visible} transferVisible={(visible)=>this.transferVisible(visible)}></Dialog>
      </div>
    )
  }
}

export default CashOut;
