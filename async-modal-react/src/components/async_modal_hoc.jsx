import React from 'react';
import { Modal, Input, Button } from 'antd';

const ModalHoc = (modalProps = {}) => DefaultComponent => class extends React.Component {
  state = {
    visible: false,
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

  hanldeResolve = (...params) => {
    if (typeof this.resolve === 'function') {
      this.resolve(...params);
    }
    delete this.reject;
    this.close();
  }

  render() {
    return <Modal
      {...modalProps}
      visible={this.state.visible}
      footer={null}
      closable
      onCancel={this.close}
    >
      <DefaultComponent
        {...this.props}
        hanldeResolve={this.hanldeResolve}
        hanldeClose={this.close}
      ></DefaultComponent>
    </Modal>
  }
}

class Demo extends React.Component {
  state = {
    text: '',
  }

  handleOk = () => {
    this.props.hanldeResolve(this.state.text)
  }

  render() {
    return <div>
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
      <div style={{
        marginTop: 10,
        textAlign: 'right'
      }}>
        <Button style={{marginRight: 5}} onClick={this.props.hanldeClose}>取消</Button>
        <Button type="primary" onClick={this.handleOk}>确定</Button>
      </div>
    </div>
  }
}

export default ModalHoc()(Demo);