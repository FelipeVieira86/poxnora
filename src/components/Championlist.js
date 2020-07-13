import React, { Component } from 'react';
import ChampionsData from '../data/championsdata';
// import Champion from './Champion';
import ChampionInfo from './ChampionInfo';

class ChampionList extends Component {
  render() {
    return (
      <div>
        <div>
          {ChampionsData.map(champion => (
            <ChampionInfo
              type={champion.type}
              key={champion.key}
              image={champion.image}
              rarity={champion.rarity}
              name={champion.name}
              faction1={champion.faction1}
              faction2={champion.faction2}
              cost={champion.cost}
              atk={champion.atk}
              spd={champion.spd}
              rng={champion.range}
              def={champion.def}
              hp={champion.hp}
              flavor={champion.flavor}
              ability1={champion.ability1}
              ability2={champion.ability2}
              abilities={champion.abilities}
              limit={champion.limit}
              races={champion.race}
              classes={champion.class}
              size={champion.size}
              exp={champion.exp}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ChampionList;
