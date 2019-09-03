import React from 'react';
import { List, Avatar, Button, Skeleton } from 'antd';
import {data1,data2,data3,data4} from './mock'
import Notify from '../notification/notification'

// import reqwest from 'reqwest';

const count = 3;

class LoadMoreList extends React.Component {
  state = {
    initLoading: true,
    loading: false,
    data: [],
    list: []
  };

    /**
   * 设置头部底部标签位置
   * @param  {string} type 数据类型
   */
  setFlagBarPos = type => {
    let mockData;
    switch(type){
      case '1':
        mockData = data1;
        break;
      case '2':
        mockData = data2;
        break;
      case '3':
        mockData = data3;
        break;
      case '4':
        mockData = data4;
        break;
      default: 
        mockData = data1;
    }
    this.setState({
      data: mockData,
      list: mockData,
      initLoading: false,
    })
  }

  componentWillReceiveProps(nextProps){
    // 属性变化时设置请求数据
    let currenType = this.props.location.pathname.split('/')[3];
    let type = nextProps.location.pathname.split('/')[3];
    if(currenType !== type){
    }
  };

  componentDidMount() {
    let currenType = this.props.location.pathname.split('/')[3];
    this.setFlagBarPos(currenType);
  }

  // getData = callback => {
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

  onLoadMore = () => {
    this.setState({
      loading: true,
      list: this.state.data.concat([...new Array(count)].map(() => ({ loading: true, name: {} }))),
    });
    setTimeout(()=>{
      const data = data1.concat(data1)
      this.setState({
          data,
          list: data,
          loading: false,
      },() => {
          window.dispatchEvent(new Event('resize'));
        }
      );
    },3000)
    // this.getData(res => {
    //   const data = this.state.data.concat(res.results);
    //   this.setState(
    //     {
    //       data,
    //       list: data,
    //       loading: false,
    //     },
    //     () => {
    //       // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
    //       // In real scene, you can using public method of react-virtualized:
    //       // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
    //       window.dispatchEvent(new Event('resize'));
    //     },
    //   );
    // });
  };

  showMoreInfo = ()=>{
    Notify('info','提示','登录淘宝可查看更多订单信息')
  };

  render() {
    const { initLoading, loading, list } = this.state;
    const loadMore =
      !initLoading && !loading ? (
        <div
          style={{
            textAlign: 'center',
            marginTop: 12,
            height: 32,
            lineHeight: '32px',
          }}
        >
          <Button onClick={this.onLoadMore}>loading more</Button>
        </div>
      ) : null;

    return (
      <List
        className="demo-loadmore-list"
        loading={initLoading}
        itemLayout="horizontal"
        loadMore={loadMore}
        dataSource={list}
        renderItem={item => (
          <List.Item
            actions={[<a onClick={this.showMoreInfo}>更多</a>]}
          >
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta
                avatar={
                  <Avatar src={item.name.src} />
                }
                title={<a href="https://ant.design">{item.name.orderId}</a>}
                description={item.name.des}
              />
            </Skeleton>
          </List.Item>
        )}
      />
    );
  }
}

export default LoadMoreList;