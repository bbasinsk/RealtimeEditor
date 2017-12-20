import React, { Component } from 'react';
import './App.css';
import CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { code: "// Code" };
  }

	updateCode = (newCode) => {
		this.setState({ code: newCode });
	}


  render() {
    let options = {
			lineNumbers: true,
    };

    return (

      <div className="App">
        <CodeMirror
          value={this.state.code} 
          onChange={this.updateCode} 
          options={options} />
      </div>
    );
  }
}

export default App;
