import React, { Component } from 'react';

export default class RaceSelect extends Component {
  render() {
    const classes = [
      'Archer',
      'Monk',
      'Paladin',
      'Priest',
      'Ranger',
      'Rogue',
      'Shaman',
      'Warrior',
      'Wizard',
      'Demi-God',
      'Knight',
      'Bard',
      'Witch',
      'Tinkerer',
      'Brute'
    ]
    const { onChange } = this.props;
    return (
      <div style={{fontSize: '10px' }}>
        <select onChange={onChange}>
          <option value="all">All Classes</option>
          {classes.sort().map((classe) => (
            <option value={classe}>{classe}</option>
          ))}
        </select>
      </div>
    );
  }
}
