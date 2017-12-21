import React, { Component } from 'react';

import { Controlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';
import 'codemirror/mode/markdown/markdown.js'

class CodeEditor extends Component {
  render() {
    return (
      <div style={{width: '50%', display: 'inline-block', height: '100%'}} className={'codemirror-containter'}>
        <CodeMirror
          value={this.props.code}
          onBeforeChange={(editor, data, newCode) => this.props.updateCode(editor, data, newCode)}
          // onChange={(editor, data, newCode) => this.props.updateCode(editor, data, newCode)}
          options={this.props.options} />
      </div>
    );
  }
}

export default CodeEditor;
