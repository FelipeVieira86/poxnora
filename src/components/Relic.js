import React, { Component } from 'react';
// import ChampionInfo from './ChampionInfo';

class Relic extends Component {
  // constructor(props) {
  //   super(props);
  //   this.championInfo = this.championInfo.bind(this);
  // }

  // relicInfo() {
  //   console.log('list')
  // }
 
  render() {
    const { name } = this.props.attr;
    return (
      <div className="rune-name-container">
        <p onClick={this.relicInfo} className="relic">{name}</p>
      </div>
    );
  }
}

export default Relic;