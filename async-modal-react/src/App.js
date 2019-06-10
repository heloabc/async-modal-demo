import React from 'react';
import './App.css';
import { Button } from 'antd';
import AsyncModal from './components/async_modal_hoc';

class App extends React.Component {

  handleOpenModal = async () => {
    if (this.refs.asyncModal) {
      const result = await this.refs.asyncModal.open();
      console.log(result)
    }
  }

  render() {
    return (
      <div className="App">
        <Button
          onClick={this.handleOpenModal}
        >
          Open Modal
        </Button>
        <AsyncModal ref="asyncModal"></AsyncModal>
      </div>
    );
  }
}

export default App;
