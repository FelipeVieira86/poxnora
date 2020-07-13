import React from 'react';
import Axios from 'axios';
import ChampionInfo from './ChampionInfo';
import {useAsync} from 'react-async';

import './style.css';

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

