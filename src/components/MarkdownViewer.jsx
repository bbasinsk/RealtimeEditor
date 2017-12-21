import React, { Component } from 'react';

const ReactMarkdown = require('react-markdown');

class MarkdownViewer extends Component {
  render() {
    const markdownContent = this.props.code;

    return (
      <div style={{ width: '50%', float: 'right' }} >
        <ReactMarkdown source={markdownContent} />
      </div>
    );
  }
}

export default MarkdownViewer;