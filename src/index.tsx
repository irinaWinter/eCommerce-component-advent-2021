import ReactDOM from 'react-dom';

import { App, ErrorBoundry } from './components';

import './assets/styles/styles.css'

ReactDOM.render(
  <ErrorBoundry>
    <App />
  </ErrorBoundry>,
  document.getElementById('root')
);

