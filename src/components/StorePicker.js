import React from 'react';
import {getFunName} from '../helpers';
import PropTypes from 'prop-types';

class StorePicker extends React.Component {

    static propTypes = {
        history: PropTypes.object
    };

    myInput = React.createRef();

    goToStore = (event) => {
        event.preventDefault();
        const storeName = this.myInput.value.value;
        this.props.history.push(`/store/${storeName}`);
    };

    render() {
        return (
            <form className='store-selector' onSubmit={this.goToStore}>
                <h1>Please Enter the Store</h1>
                <input
                    ref={this.myInput}
                    type="text"
                    required
                    placeholder="Store Name"
                    defaultValue={getFunName()
                    }>
                </input>
                <button type="submit">Visit Store >></button>
            </form>
        )
    }
}

export default StorePicker;
