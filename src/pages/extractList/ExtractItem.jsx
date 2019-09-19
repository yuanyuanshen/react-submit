import React from 'react';
import { List, Avatar, Button, Skeleton } from 'antd';
import Notify from '@/components/notification/notification'
import PropTypes from 'prop-types';
import './Extract.css'
import API from '@/api/api.js'


class LoadMoreList extends React.Component {
  static propsType = {
    pageKey: PropTypes.string.isRequired
  }

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
  setFlagBarPos = async (type) => {
    try{
      let mockData = await API.getExtractList({orderStatus:type})
      this.setState({
        data: mockData.data,
        list: mockData.data,
        initLoading: false,
      })
    }catch(err){
      console.error(err);
    }
  }

  componentWillReceiveProps(nextProps){
    // 属性变化时设置请求数据
  };

  componentDidMount() {
    let currenType = this.props.pageKey;
    this.setFlagBarPos(currenType);
  }

  onLoadMore = () => {
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