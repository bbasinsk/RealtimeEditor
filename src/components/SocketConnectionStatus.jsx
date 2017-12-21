import React, { Component } from 'react';

import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { MessageBar, MessageBarType } from 'office-ui-fabric-react/lib/MessageBar';
import { initializeIcons } from '@uifabric/icons';
initializeIcons();

class SocketConnectionStatus extends Component {
  render() {
    return (
      <Fabric>
        {this.props.connected ?
          <MessageBar messageBarType={MessageBarType.success} isMultiline={false}>Connected</MessageBar>
          :
          <MessageBar messageBarType={MessageBarType.error} isMultiline={false}>Disconnected</MessageBar>
        }
      </Fabric>
    );
  }
}

export default SocketConnectionStatus;