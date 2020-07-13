import React from 'react';
import Axios from 'axios';
import Champion from './Champion';
import ChampionInfo from './ChampionInfo';
import { useAsync } from 'react-async';

/* Usse esse import para os testes e comente a linha 24*/
import { champs } from '../data/champs.json';

import './style.css';

const getChamps = async () => {
  return new Promise(async (resolved, rejected) => {
    await Axios.get('https://www.poxnora.com/api/feed.do?t=json')
      .then(({ data }) => {
        resolved(data.champs);
      })
      .catch(err => {
        rejected(err);
      });
  });
};

export default function ChampionList() {
  //const {data: champs} = useAsync({promiseFn: getChamps});
  return (
    <div>
      <div className="rune-count">{champs.length} Champions</div>
      <div className="rune-list">
        {typeof champs !== 'undefined'
          // ? champs.slice(0,10).map((champion, key) => (<ChampionInfo key={key} attr={champion} />))
          ? champs.map((champion, key) => <Champion key={key} attr={champion} />)
          : 'Carregando...'}
      </div>
    </div>
  );
}
