import React from 'react';
import { render } from 'react-dom';
import Relay from 'react-relay';
import App from './App';
import ViewerQueries from './queries';

const environment = new Relay.Environment()
const networkLayer = new Relay.DefaultNetworkLayer('https://api.graph.cool/relay/v1/civivmdc20qql01308unfqj7m')
environment.injectNetworkLayer(networkLayer);

class AppRenderer extends React.Component {
  render() {
    return (
      <Relay.Renderer
        Container={ App }
        environment={ environment }
        queryConfig={{
          name: "RelayRoute",
          queries: ViewerQueries,
          params: {},
        }}
        render={({ done, error, props }) => {
          if (props) {
            return <App { ...props } />
          }
          return <div>Loading...</div>
        }}
      />
    )
  }
}

render(<AppRenderer />, document.getElementById('root'))
