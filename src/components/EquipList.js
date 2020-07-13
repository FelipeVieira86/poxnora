import React from 'react';
import { equips } from '../data/champs.json';
import Equip from './Equip'

export default function SpellList() {
  //const {data: champs} = useAsync({promiseFn: getChamps});
  return (
    <div className="rune-list-container">
      <div className="rune-count">{equips.length} Equips</div>
      <div className="rune-list">
        {typeof equips !== 'undefined'
          // ? champs.slice(0,10).map((champion, key) => (<ChampionInfo key={key} attr={champion} />))
          ? equips.map((equip, key) => <Equip key={key} attr={equip} />)
          : 'Carregando...'}
      </div>
    </div>
  );
}
