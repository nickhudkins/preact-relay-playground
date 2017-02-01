import React, { Component } from 'react';
import Relay from 'react-relay';

class App extends Component {
  render() {
    return <div>Hello { this.props.viewer.id }</div>
  }
}

const AppContainer = Relay.createContainer(App, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        id
        allFiles(first: 1) {
          edges {
            node {
              id
            }
          }
        }
      }
    `
  }
})


export default AppContainer;
