import React, { Component } from 'react';

export default class RaceSelect extends Component {
  render() {
    const races = [
      'Angel',
      'Arthropod',
      'Beast',
      'Barbarian',
      'Centaur',
      'Demon',
      'Dragon',
      'Dwarf',
      'Elemental',
      'Elf',
      'Fairy',
      'Goblin',
      'Human',
      'Minotaur',
      'Mutant',
      'Plant',
      'Spirit',
      'Troll',
      'Undead',
      "G'hern",
      'Moga',
      'Cyclops',
      'Garu',
      'Mirefolk',
      'Construct',
      'Draksar',
      'Skeezick',
      'Boghopper',
      'Firk',
      'Lonx',
      'Yeti',
      'Jakei',
      'Skeleton',
      'Voil',
      'Hyaenid',
      'Salaman',
      'Zombie',
      'Treefolk',
      'Lich',
      'Vampyre',
      'Leoss',
      'Kanen',
      'Tortun',
      'Stitched',
      'Worm',
      'Snaptooth',
      'Myx',
      'Imp',
      'Ferren',
      'Vashal',
      'Jellebrium',
      'Slag',
    ];
    const { onChange } = this.props;
    return (
      <div style={{fontSize: '10px' }}>
        <select onChange={onChange}>
          <option value="all">All Races</option>
          {races.sort().map((race) => (
            <option value={race}>{race}</option>
          ))}
        </select>
      </div>
    );
  }
}
