import React from 'react';
import Header from './header';
import Inventory from './inventory';
import Order from './order';
import Fish from './fish';
import sampleFishes from '../sample-fishes';

class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    }
    addFish = fish => {
        // 1. Take a copy of the existing state
        const fishes = { ...this.state.fishes };
        // 2. Add our new fish to that fishes variable
        fishes[`fish${Date.now()}`] = fish;
        // 3. Set the new fishes object to state
        this.setState({
            fishes
        });
    };
    loadSampleFishes = () => {
        this.setState({
            fishes: sampleFishes
        });
    };
    render(){
        return(
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh seafood market"/>
                    <ul className="fishes">
                        {
                            Object
                                .keys(this.state.fishes)
                                .map(key => <Fish key={key} details={this.state.fishes[key]}/>)
                        }
                    </ul>
                </div>
                <Order />
                <Inventory 
                    addFish={this.addFish}
                    loadSampleFishes={this.loadSampleFishes}/>
            </div>
        )
    }
}

export default App;