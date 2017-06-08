const fs = require('fs');

const NAME = process.argv[2]; // component's NAME

function generateReactComponent() {
  const entry =
`import ${NAME} from './${NAME}';

export default ${NAME};
`;

  const jsx =
`import React, {Component} from 'react';
import classNames from 'classnames';

import scss from './${NAME}.scss';

export default class ${NAME} extends Component {
  // constructor(props) {
  // super(props);
  // this.state = {};
  // }

  render() {
    return (
      <div className={scss.${NAME}}>

      </div>
    );
  }
}
`;

  const scss = `.${NAME} {}`;

  if (fs.existsSync(`dev/components/${NAME}`)) {
    console.log(`========== ${NAME} folder exist ==========`);
  } else {
    fs.mkdirSync(`dev/components/${NAME}`);
    fs.writeFileSync(`dev/components/${NAME}/index.js`, entry);
    fs.writeFileSync(`dev/components/${NAME}/${NAME}.jsx`, jsx);
    fs.writeFileSync(`dev/components/${NAME}/${NAME}.scss`, scss);
  }
}

if (fs.existsSync('dev/components')) {
  console.log('========== components folder exist ==========');
} else {
  fs.mkdirSync('dev/components');
}

generateReactComponent();
