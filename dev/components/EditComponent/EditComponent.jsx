import React from 'react';
import classNames from 'classnames';
import './_EditComponent.scss';

class EditComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Edit me.',
            toggle: false,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        document.addEventListener('click', e => {
            if (e.target !== document.getElementsByClassName('edit')[0]
                && e.target !== document.getElementsByClassName('label')[0]) {
                this.setState({
                    toggle: false,
                });
            }
        });
    }

    handleClick() {
        this.setState(prevState => ({
            toggle: !prevState.toggle,
        }));
    }

    handleChange(e) {
        this.setState({
            value: e.target.value,
        });
    }

    render() {
        const value = this.state.value;
        const divClassName = classNames({
            tooltip: true,
            active: this.state.toggle,
        });

        return (
          <section>
            <div className={divClassName}>
              <input
                value={value}
                className="edit"
                onChange={this.handleChange}
              />
            </div>
            <p>
              <span
                className="label"
                onClick={() => this.handleClick()}
              >
                {value}
              </span>
            </p>
          </section>
        );
    }
}

export default EditComponent;
