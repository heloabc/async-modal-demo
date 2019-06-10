import React from 'react';
import './App.css';
import { Button } from 'antd';
import AsyncModal from './components/async_modal_hoc';

class App extends React.Component {

  state = {
    result: ''
  }
  handleOpenModal = async () => {
    if (this.refs.asyncModal) {
      try {
        const result = await this.refs.asyncModal.open();
        console.log(result)
        this.setState({ result: `get result ${result}` })
      } catch(e) {
        console.log(e)
        this.setState({ result: `catch error ${e}` })
      }
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
        <div style={{ marginTop: 20 }}>
          {
            this.state.result
          }
        </div>
        <AsyncModal ref="asyncModal"></AsyncModal>
      </div>
    );
  }
}

export default App;
