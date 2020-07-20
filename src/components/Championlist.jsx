import React, { Component } from 'react';
import List from './templates/ListTemplate';

import { champs } from '../data/champs.json';

export default class ChampionList extends Component {
  render = () => {
    const { race, search, faction, classe } = this.props;
    return (
      <List classe={classe} race={race} faction={faction} search={search} data={champs} target='Champion'/>
    )
  }
}