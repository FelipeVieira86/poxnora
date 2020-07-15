import React, { Component } from 'react';
import ChampionList from './components/Championlist';
import SpellList from './components/SpellList';
import EquipList from './components/EquipList';
import RelicList from './components/RelicList';

import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import { TextInput } from 'react-materialize';

import './styles/icons.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: 'all',
    };
  }

  componentDidMount() {
    M.AutoInit();
  }

  setSearchTerm = target => {
    this.setState({ searchTerm: target.value || 'all' });
  };

  render() {
    return (
      <div className="App">
        <div>
          <TextInput
            onChange={({ target }) => {
              this.setSearchTerm(target);
            }}
            id="find"
            label="Search"
          />
        </div>
        <div className="list-container">
          <div className="column">
            <ChampionList search={this.state.searchTerm} />
            <RelicList search={this.state.searchTerm} />
          </div>
          <div className="column">
            <SpellList search={this.state.searchTerm} />
            <EquipList search={this.state.searchTerm} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
