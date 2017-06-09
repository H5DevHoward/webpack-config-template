import React from 'react';
import ReactDOM from 'react-dom';

import {
  App,
} from './components';

// Import data
import data from './data.json';
// Import stylesheet
import scss from './styles/style.scss';

const MOUNT_NODE = document.getElementById('app');

ReactDOM.render(
  <App className={scss.lol} data={data}>
  </App>,
  MOUNT_NODE
);
