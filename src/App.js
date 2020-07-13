import React, { Component } from 'react';
import ChampionList from './components/Championlist';
import SpellList from './components/SpellList';
import EquipList from './components/EquipList';
import RelicList from './components/RelicList';


import M from "materialize-css";

class App extends Component {

  componentDidMount() {
    M.AutoInit();
  }

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
