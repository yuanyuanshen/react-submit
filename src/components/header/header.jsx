import React,{Component} from 'react';
import { Drawer,PageHeader,Icon} from 'antd';
import {withRouter,Link} from "react-router-dom";
import './header.css'

class Header extends Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  goBack = ()=>{
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <PageHeader onBack={this.goBack} title={this.props.title}  className="myHeader" extra={[
          <Icon key="1" type="right-square" theme="filled" onClick={this.showDrawer}/>
        ]}/>
        <Drawer
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <p className="my-drawer"><Link to={`${this.props.match.path}/passed`} className="nav-link">首页</Link><Icon type="right" /></p>
          <p className="my-drawer"><Link to={`${this.props.match.path}/passed`} className="nav-link">提现</Link><Icon type="right" /></p>
          <p className="my-drawer"><Link to={`${this.props.match.path}/passed`} className="nav-link">提现记录</Link><Icon type="right" /></p>
          <p className="my-drawer"><Link to={`${this.props.match.path}/passed`} className="nav-link">我的订单</Link><Icon type="right" /></p>
        </Drawer>
      </div>
    );
  }
}

export default withRouter(Header);