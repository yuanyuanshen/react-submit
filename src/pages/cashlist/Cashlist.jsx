import React from 'react';
import Header from '@/components/header/header'
import { List, message, Spin } from 'antd';
import { connect } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroller';
import { getCashList } from '@/store/cashout/action'
import './Cashlist.css'

class CashList extends React.Component {
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

  // fetchData = callback => {
  //   reqwest({
  //     url: fakeDataUrl,
  //     type: 'json',
  //     method: 'get',
  //     contentType: 'application/json',
  //     success: res => {
  //       callback(res);
  //     },
  //   });
  // };

  handleInfiniteOnLoad = () => {
    this.setState({
      loading: true,
    });
    if (this.props.cashInfo.cashList.length > 14) {
      message.warning('Infinite List loaded all');
      this.setState({
        hasMore: false,
        loading: false,
      });
      return;
    }
    // this.fetchData(res => {
    //   data = data.concat(res.results);
    //   this.setState({
    //     data,
    //     loading: false,
    //   });
    // });
    this.setState({
      loading: false,
    });
  };

  render() {
    return (
      <div>
        <Header title="提现记录"></Header>
        <div className="provide-help">如有问题请拨打400-8877-7788联系客服</div>
        <div className="demo-infinite-container">
          <InfiniteScroll
            initialLoad={false}
            pageStart={0}
            loadMore={this.handleInfiniteOnLoad}
            hasMore={!this.state.loading && this.state.hasMore}
            useWindow={false}
          >
            <List
              loading={this.props.cashInfo.initLoading}
              dataSource={this.props.cashInfo.cashList}
              renderItem={item => (
                <List.Item key={item.id}>
                  <List.Item.Meta
                    title={<a href="https://ant.design">{item.last}</a>}
                    description={item.id}
                  />
                  <div className={item.status == '1'?'danger':'success'}>{item.state}</div>
                </List.Item>
              )}
            >
              {this.state.loading && this.state.hasMore && (
                <div className="demo-loading-container">
                  <Spin />
                </div>
              )}
            </List>
          </InfiniteScroll>
        </div>
      </div>
    );
  }
}

export default connect(state=>({
    cashInfo: state.cashInfo}),{getCashList})(CashList);