import React from 'react'
import PropTypes from 'prop-types';
import { Modal } from 'antd';

class Dialog extends React.Component {
  static propTypes = {
    transferVisible: PropTypes.func.isRequired,
    visible: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    des: PropTypes.string.isRequired
  }

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