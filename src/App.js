import React, { Component } from 'react';
import ChampionList from './components/Championlist';

import M from "materialize-css";

class App extends Component {

  componentDidMount() {
    M.AutoInit();
  }

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
