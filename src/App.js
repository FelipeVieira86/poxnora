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
        <div>
          <TextInput onKeyPress={this.setSearchTerm} id="find" label="Search" />
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

        <footer className="footer">
          Made by:{' '}
          {
            <a href={devs[0][1]} target="_blank">
              {' '}
              {devs[0][0]}
            </a>
          } {` and `} {
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
