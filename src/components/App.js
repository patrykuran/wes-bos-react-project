import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from '../base';

class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    };

    componentDidMount() {
        const {params} = this.props.match;
        // reinstate our localStorage
        const localStorageRef = localStorage.getItem(params.storeId);
        if (localStorageRef) {
            this.setState({order: JSON.parse(localStorageRef)})
        }
        this.ref = base.syncState(`${params.storeId}/fishes`, {
            context: this,
            state: "fishes"
        });
    };

    componentDidUpdate() {
        const {params} = this.props.match;
        localStorage.setItem(params.storeId, JSON.stringify(this.state.order));
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    addFish = fish => {
        // 1. make a copy of existing state - we never override it. Use spread operator to copy the whole object
        const fishes = {...this.state.fishes};
        // 2. add new fish to fishes variable
        fishes[`fish${Date.now()}`] = fish;
        // 3. set new fishes object to state
        this.setState({
            fishes: fishes
        });
    };

    updateFish = (key, updatedFish) => {
        // 1. make a copy of state
        const fishes = {...this.state.fishes}
        // 2. update the state
        fishes[key] = updatedFish;
        // 3. pass it to the state and update the state
        this.setState({fishes : fishes});
    };

    loadSampleFishes = () => {
        this.setState({
            fishes: sampleFishes
        });
    };

    addToOrder = (key) => {
        const order = {...this.state.order};
        order[key] = order[key] + 1 || 1;
        this.setState({order: order});
    };

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Seafood Yumm"/>
                    <ul className="fishes">
                        {/*
                        we cannot use map() on object, it's only for arrays. But we can
                        map through keys of the object. key is a React built-in
                        functionality. key={key} gives a unique key.
                        */}

                        {Object.keys(this.state.fishes).map(key => (
                            <Fish key={key}
                                  index={key}
                                  details={this.state.fishes[key]}
                                  addToOrder={this.addToOrder}/>
                        ))}
                    </ul>
                </div>
                <Order fishes={this.state.fishes} order={this.state.order}/>
                <Inventory
                    addFish={this.addFish}
                    updateFish={this.updateFish}
                    loadSampleFishes={this.loadSampleFishes}
                    fishes={this.state.fishes}
                />
            </div>
        );
    }
}

export default App;
