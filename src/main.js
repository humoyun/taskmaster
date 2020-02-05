import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.less';

const title = 'React with Webpack and Babel 2';

ReactDOM.render(
  <App title={title} />,
  document.getElementById('root')
);

module.hot.accept();