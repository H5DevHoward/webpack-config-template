import React, {Component} from 'react';
import classNames from 'classnames';

import scss from './Test.scss';

export default class Test extends Component {
    render() {
        return (
            <div className={scss.Test}>
                Hello world!
            </div>
        );
    }
}
