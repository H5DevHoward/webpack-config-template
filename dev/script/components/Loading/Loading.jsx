import React, {Component} from 'react';
import classNames from 'classnames';

import scss from './Loading.scss';

export default () =>
    <div className={scss['loading-wrapper']}>
        <div className={scss['loading-container']}></div>
    </div>
;
