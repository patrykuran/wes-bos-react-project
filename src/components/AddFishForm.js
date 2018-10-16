import React from "react";
import PropTypes from 'prop-types';

class AddFishForm extends React.Component {
    static propTypes = {
        addFish: PropTypes.func
    };

    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    makeFish = event => {
        event.preventDefault();
        const fish = {
            name: this.nameRef.value.value,
            price: parseFloat(this.priceRef.value.value), // makes a numer (float) from string
            status: this.statusRef.value.value,
            desc: this.descRef.value.value,
            image: this.imageRef.value.value
        };
        this.props.addFish(fish);
        event.currentTarget.reset();
    };

    render() {
        return (
            <form className="fish-edit" onSubmit={this.makeFish}>
                <input name="name" type="text" ref={this.nameRef} placeholder="Name"/>
                <input
                    name="price"
                    type="text"
                    ref={this.priceRef}
                    placeholder="Price"
                />
                <select
                    name="status"
                    type="text"
                    ref={this.statusRef}
                    placeholder="Status"
                >
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea name="desc" ref={this.descRef} placeholder="Desc"/>
                <input
                    name="image"
                    ref={this.imageRef}
                    type="text"
                    placeholder="Image"
                />
                <button type="submit">+ Add Fish</button>
            </form>
        );
    }
}

export default AddFishForm;
