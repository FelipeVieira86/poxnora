import React from 'react';
import { spells } from '../data/champs.json';
import Spell from './Spell'

export default function SpellList() {
  //const {data: champs} = useAsync({promiseFn: getChamps});
  return (
    <div className="rune-list-container">
      <div className="rune-count">{spells.length} Spells</div>
      <div className="rune-list">
        {typeof spells !== 'undefined'
          // ? champs.slice(0,10).map((champion, key) => (<ChampionInfo key={key} attr={champion} />))
          ? spells.map((spell, key) => <Spell key={key} attr={spell} />)
          : 'Carregando...'}
      </div>
    </div>
  );
}
