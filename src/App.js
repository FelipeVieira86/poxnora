import { TextInput } from 'react-materialize';
import React, { Component } from 'react';
import ChampionList from './components/Championlist';
import SpellList from './components/SpellList';
import EquipList from './components/EquipList';
import RelicList from './components/RelicList';
import FactionSelect from './components/FactionSelect';
import Footer from './components/Footer';
import RaceSelect from './components/RaceSelect';
import ClassSelect from './components/ClassSelect';

import './styles/style.css';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import './styles/icons.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      classe: 'all',
      faction: 'all',
      racaNegra: 'all',
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
          <ClassSelect onChange={(event) => this.setState({ classe: event.target.value })} />
          <RaceSelect onChange={(event) => this.setState({ races: event.target.value })} />
          <FactionSelect onChange={(event) => this.setState({ faction: event.target.value })} />
        </div>
        <div className="list-container">
          <div className="column">
            <ChampionList
              classe={this.state.classe}
              race={this.state.races}
              faction={this.state.faction}
              search={this.state.searchTerm}
            />
            <RelicList faction={this.state.faction} search={this.state.searchTerm} />
          </div>
          <div className="column">
            <SpellList faction={this.state.faction} search={this.state.searchTerm} />
            <EquipList faction={this.state.faction} search={this.state.searchTerm} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
