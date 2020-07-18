import React, { Component } from 'react';
import ChampionList from './components/Championlist';
import SpellList from './components/SpellList';
import EquipList from './components/EquipList';
import RelicList from './components/RelicList';
import './styles/style.css';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import { TextInput } from 'react-materialize';

import './styles/icons.css';

const devs = [
  ['Felipe Vieira', 'https://github.com/FelipeVieira86/'],
  ['Lizzard Medeiros', 'https://github.com/LizzardMedeiros/'],
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: 'all',
      faction: 'all',
    };
  }

  componentDidMount() {
    M.AutoInit();
  }

  setSearchTerm = ({ key, target }) => {
    if (key === 'Enter') {
      this.setState({ searchTerm: target.value || 'all' });
    }
  };

  render() {
    return (
      <div className="App">
        <div className="search-container">
          <TextInput onKeyPress={this.setSearchTerm} id="find" label="Search" />
          <select onChange={(event) => this.setState({faction: event.target.value})} className="select">
            <option value="all">
              All
            </option>
            <option value="Forsaken Wastes">
              Forsaken Wastes
            </option>
            <option value="Sundered Lands">
              Sundered Lands
            </option>
            <option value="Ironfist Stronghold">
              Ironfist Stronghold
            </option>
            <option value="Underdepths">
              Underdepths
            </option>
            <option value="K'thir Forest">
              K'thir Forest
            </option>
            <option value="Forglar Swamp">
              Forglar Swamp
            </option>
            <option value="Savage Tundra">
              Savage Tundra
            </option>
            <option value="Shattered Peaks">
              Shattered Peaks
            </option>
          </select>
        </div>
        <div className="list-container">
          <div className="column">
            <ChampionList faction={this.state.faction} search={this.state.searchTerm} />
            <RelicList faction={this.state.faction} search={this.state.searchTerm} />
          </div>
          <div className="column">
            <SpellList faction={this.state.faction} search={this.state.searchTerm} />
            <EquipList faction={this.state.faction} search={this.state.searchTerm} />
          </div>
        </div>

        <footer className="footer">
          Made by:{' '}
          {
            <a href={devs[0][1]} target="_blank">
              {' '}
              {devs[0][0]}
            </a>
          }{' '}
          {` and `}{' '}
          {
            <a href={devs[1][1]} target="_blank">
              {' '}
              {devs[1][0]}
            </a>
          }
        </footer>
      </div>
    );
  }
}

export default App;
