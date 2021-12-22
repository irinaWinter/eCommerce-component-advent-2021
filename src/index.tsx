import ReactDOM from 'react-dom';

import { App, ErrorBoundry } from './components';

ReactDOM.render(
  <ErrorBoundry>
    <App />
  </ErrorBoundry>,
  document.getElementById('root')
);

