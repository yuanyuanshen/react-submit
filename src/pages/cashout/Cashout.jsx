import React , {Component} from 'react';
import { InputNumber,Button,message } from 'antd';
import Header from '@/components/header/header'
import './Cashout.css'
import Dialog from '@/components/dialog/dialog'
import { connect } from 'react-redux'
import { addToCashList,resetUseMoney } from '@/store/cashout/action'
import PropTypes from 'prop-types'

class CashOut extends Component {
  static propTypes = {
    cashInfo: PropTypes.object.isRequired,
    addToCashList:PropTypes.func.isRequired,
    resetUseMoney:PropTypes.func.isRequired
  }

  state = {
    money: 0,
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
      let sub = this.props.cashInfo.usefulMoney - this.state.money;
      this.props.resetUseMoney(sub)
      this.setState({
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
          <div className="remainder">您当前的可提现金额为：￥{this.props.cashInfo.usefulMoney}</div>
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

export default connect(state =>({
  cashInfo: state.cashInfo
}),{addToCashList,resetUseMoney})(CashOut);
