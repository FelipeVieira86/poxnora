import React, { Component } from 'react';
import ChampionList from './components/Championlist';
import SpellList from './components/SpellList';
import EquipList from './components/EquipList';
import RelicList from './components/RelicList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="rune-list-container">
          <ChampionList />
        </div>
        <div className="rune-list-container">
          <SpellList />
        </div>
        <div>
          <div className="rune-list-container">
            <RelicList />
          </div>
          <div className="rune-list-container">
            <EquipList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
