import React, { Component } from 'react';
import './App.css';

import CodeEditor from './components/CodeEditor.jsx';
import SocketConnectionStatus from './components/SocketConnectionStatus.jsx';
import MarkdownViewer from './components/MarkdownViewer.jsx';

import io from 'socket.io-client';
const socketUrl = "http://192.168.86.27:3231"


class RealTimeEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '',
      socket: null,
      connected: false
    };
  }

  componentDidMount() {
    this.initSocket();
  }

  initSocket = () => {
    const socket = io(socketUrl);

    socket.on('connect', () => {
      this.setState({ connected: true });
    });

    socket.on('disconnect', () => {
      this.setState({ connected: false });
    });

    socket.on('receive code', (payload) => {
      this.setState({ code: payload.newCode });
    });

    this.setState({ socket: socket });
  }

  updateCode = (e, d, newCode) => {
    this.setState({ code: newCode });
    this.state.socket.emit('coding event', {
      newCode: newCode
    });
  }

  render() {
    const options = {
      lineNumbers: true,
      mode: 'markdown',
      theme: 'monokai'
    };

    return (
      <div className="App">

        {/* <h1>{this.state.connected ? 'Connected' : 'Disconnected'}</h1> */}

        <SocketConnectionStatus connected={this.state.connected} />

        <CodeEditor
          code={this.state.code}
          updateCode={(editor, data, newCode) => this.updateCode(editor, data, newCode)}
          options={options}
        />

        <MarkdownViewer 
          code={this.state.code} 
        />
        


      </div>
    );
  }
}

export default RealTimeEditor;
