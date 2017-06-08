import React from 'react';
import ReactDOM from 'react-dom';

import {
  App,
  EditComponent,
} from './components';

// Import data
import data from './data.json';
// Import stylesheet
import scss from './index.scss';

const MOUNT_NODE = document.getElementById('app');

ReactDOM.render(
  <App className={scss.lol} data={data}>
    <EditComponent />
  </App>,
  MOUNT_NODE
);
