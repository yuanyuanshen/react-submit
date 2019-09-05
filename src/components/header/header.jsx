import React,{Component} from 'react';
import { Drawer,PageHeader,Icon} from 'antd';
import {withRouter} from "react-router-dom";
import PropTypes from 'prop-types';
import './header.css'

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

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

  goTo (path,e){
    this.setState({
      visible: false,
    });
    this.props.history.push(path)
  };

  render() {
    return (
      <div>
        <PageHeader onBack={this.goBack} title={this.props.title}  className="myHeader" extra={[
          <Icon key="1" type="bars" onClick={this.showDrawer} />
        ]}/>
        <Drawer
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <p className="my-drawer" onClick={this.goTo.bind(this,'/home')} >首页<Icon type="right" /></p>
          <p className="my-drawer" onClick={this.goTo.bind(this,'/cash/out')}>提现<Icon type="right" /></p>
          <p className="my-drawer" onClick={this.goTo.bind(this,'/cash/list')}>提现记录<Icon type="right" /></p>
          <p className="my-drawer" onClick={this.goTo.bind(this,'/extract/list')}>我的订单<Icon type="right" /></p>
        </Drawer>
      </div>
    );
  }
}

export default withRouter(Header);