import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import FileDownload from './FileDownload';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends React.Component {
  state = {
    fishes: {},
    order: {},
  };

  addFish = fish => {
    // 1. take a copy of the existing state
    const fishes = { ...this.state.fishes };
    // 2. add new fish to fishes variable
    fishes[`fish${Date.now()}`] = fish;
    console.log('adding a fish');
    // 3. set the new fishes object to state
    this.setState({
      fishes,
    });
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="DAS COOL THO" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish key={key} details={this.state.fishes[key]} />
            ))}
          </ul>
        </div>
        <Order />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;
