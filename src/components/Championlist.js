import React from 'react';
// import ChampionsData from '../data/championsdata';
// import Champion from './Champion';
import Axios from 'axios';
import ChampionInfo from './ChampionInfo';
import {useAsync} from 'react-async';

import './style.css';

const demo = [
  {
    id: 18,
    name: "Abomination",
    description: "A mind is a terrible thing to waste. So is a splee…a kidney, a liver, an eye... - Xulos, Undead Sage",
    maxRng: 1,
    minRng: 1,
    abilitySets: [],
    allowRanked: true,
    artist: "James Ryman",
    classes: ["Brute"],
    damage: 12,
    deckLimit: 2,
    defense: 2,
    factions: ["Forsaken Wastes"],
    forSale: true,
    hash: "cj9Ej9Dj9CG2BG2Aj9Cj9Dj9Eeeeerzzgvqhtmnj",
    hitPoints: 55,
    noraCost: 70,
    races: ["Undead", "Zombie"],
    rarity: "UNCOMMON",
    runeSet: "Pox Nora Release Set",
    size: "1x1",
    speed: 6,
    startingAbilities: [],
    tradeable: true,
  },
  {
    id: 18,
    name: "Abomination",
    description: "A mind is a terrible thing to waste. So is a splee…a kidney, a liver, an eye... - Xulos, Undead Sage",
    maxRng: 1,
    minRng: 1,
    abilitySets: [],
    allowRanked: true,
    artist: "James Ryman",
    classes: ["Brute"],
    damage: 12,
    deckLimit: 2,
    defense: 2,
    factions: ["Forsaken Wastes"],
    forSale: true,
    hash: "cj9Ej9Dj9CG2BG2Aj9Cj9Dj9Eeeeerzzgvqhtmnj",
    hitPoints: 55,
    noraCost: 70,
    races: ["Undead", "Zombie"],
    rarity: "UNCOMMON",
    runeSet: "Pox Nora Release Set",
    size: "1x1",
    speed: 6,
    startingAbilities: [],
    tradeable: true,
  }
];

const getChamps = async () => {
  return new Promise(async (resolved, rejected) => {
    await Axios.get('https://www.poxnora.com/api/feed.do?t=json')
      .then(({data}) => {
        resolved(data.champs);
      })
      .catch(err => {
        rejected(err);
      });
  });
};

export default function ChampionList() {
  const {data} = useAsync({promiseFn: getChamps});
  //let data = demo;
  return (
    <div className='champion-list'>
      {
        typeof(data) !== 'undefined' ?
          data.slice(0,10).map((champion, key) => (
            <ChampionInfo key={key} attr={champion} />
          )) : 'Carregando...'
      }
    </div>
  );
}

