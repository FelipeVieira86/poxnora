import React, { Component } from 'react';
// import ChampionInfo from './ChampionInfo';

class Spell extends Component {
  // constructor(props) {
  //   super(props);
  //   this.championInfo = this.championInfo.bind(this);
  // }

  // spellInfo() {
  //   console.log('list')
  // }
 
  render() {
    const { name } = this.props.attr;
    return (
      <div className="rune-name-container">
        <p onClick={this.spellInfo} className="spell">{name}</p>
      </div>
    );
  }
}

export default Spell;