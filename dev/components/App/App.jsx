import React, {Component} from 'react';
import className from 'classnames';

export default class App extends Component {
    componentDidMount() {
        System.import('./_runtime').then(runtime => {
            runtime.didMount.call(this, this.props.data);
        });
    }

    render() {
        return (
          <div
            className={className({
                [this.props.className]: typeof this.props.className === 'string',
            })}
          >
            {this.props.children}
          </div>
        );
    }
}
