import React from 'react';
import { Modal, Input } from 'antd';

export default class AsyncModalDemo extends React.Component {
  state = {
    visible: false,
    text: ''
  }

  open = () => {
    this.setState({
      visible: true,
    });
    return new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }

  close = () => {
    this.setState({
      visible: false,
    });
    if (this.reject && typeof this.reject === 'function') {
      this.reject('cancel');
    }
  }

  handleOk = () => {
    if (typeof this.resolve === 'function') {
      this.resolve(this.state.text);
    }
    delete this.reject;
    this.close();
  }

  render() {
    return <Modal
      visible={this.state.visible}
      onCancel={this.close}
      onOk={this.handleOk}
    >
      <div>
        hello
      </div>
      <div>
        you can check result in devtool
      </div>
      <Input
        onChange={e => {
          const v = (e && e.target && e.target.value) || '';
          this.setState({
            text: v,
          })
        }}
        value={this.state.text}
     ></Input>
    </Modal>
  }
}
