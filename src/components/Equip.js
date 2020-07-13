import React, { Component } from 'react';
// import ChampionInfo from './ChampionInfo';

class Equip extends Component {
  // constructor(props) {
  //   super(props);
  //   this.championInfo = this.championInfo.bind(this);
  // }

  // equipInfo() {
  //   console.log('list')
  // }
 
  render() {
    const { name } = this.props.attr;
    return (
      <div className="rune-name-container">
        <p onClick={this.equipInfo} className="equip">{name}</p>
      </div>
    );
  }
}

export default Equip;