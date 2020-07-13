import React, { Component } from 'react';
import ChampionList from './components/Championlist';

class App extends Component {  
  render() {
    return (
      <div className="App">
        <div className="champion-list-container">
        <ChampionList />
        </div>
      </div>
    );
  }
}

export default App;
