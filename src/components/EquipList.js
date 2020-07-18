import React, { Component } from 'react';
import List from './templates/ListTemplate';

import { equips } from '../data/champs.json';

export default class ChampionList extends Component {
  render = () => {
    const { search, faction } = this.props;
    return (
      <List faction={faction} search={search} data={equips} target='Equip'/>
    )
  }
}
