import React from 'react';
import Relic from './Relic';
import { relics } from '../data/champs.json';

import './style.css';


export default function RelicList() {
  return (
    <div>
      <div className="rune-count">{relics.length} Relics</div>
      <div className="rune-list">
        {typeof relics !== 'undefined'
          ? relics.map((relic, key) => <Relic key={key} attr={relic} />)
          : 'Carregando...'}
      </div>
    </div>
  );
}