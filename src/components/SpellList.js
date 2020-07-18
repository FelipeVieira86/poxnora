import React, { Component } from 'react';
import List from './templates/ListTemplate';

import { spells } from '../data/champs.json';

export default class ChampionList extends Component {
  render = () => {
    const { search,faction } = this.props;
    return (
      <List faction={faction} search={search} data={spells} target='Spell'/>
    )
  }
}