import React, { Component } from 'react';
import List from './templates/ListTemplate';

import { spells } from '../data/champs.json';

export default class ChampionList extends Component {
  render = () => {
    const { search } = this.props;
    return (
      <List search={search} items={spells} target='Spell'/>
    )
  }
}