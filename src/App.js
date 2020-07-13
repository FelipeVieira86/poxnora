import React, { Component } from 'react';
import ChampionList from './components/Championlist';
import SpellList from './components/SpellList';
import EquipList from './components/EquipList';
import RelicList from './components/RelicList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="column">
        <ChampionList />
        </div>
        <div className="column">
          <SpellList />
          <RelicList />
          <EquipList />
        </div>
      </div>
    );
  }
}

export default App;
