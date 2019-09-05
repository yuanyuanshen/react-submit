import React from 'react'
import { Modal } from 'antd';

class Dialog extends React.Component {

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = () => {
    this.props.transferVisible(false)
  };

  render() {
    return (
      <div>
        <Modal
          title={this.props.title}
          visible={this.props.visible}
          okText="确认"
          cancelText="取消"
          onOk={this.handleCancel}
          onCancel={this.handleCancel}
        >
          <p>{this.props.des}</p>
        </Modal>
      </div>
    );
  }

}

export default Dialog;