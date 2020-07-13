import React, { Component } from 'react';
import ChampionsData from '../data/championsdata';
// import Champion from './Champion';
import ChampionInfo from './ChampionInfo';

class ChampionList extends Component {
  render() {
    return (
      <div>
        <div>
          {ChampionsData.champs.map(champion => (
            <ChampionInfo champ={champion}/>
          ))}
        </div>
      </div>
    );
  }
}

export default ChampionList;
