import React, { Component } from 'react';
import ChampionInfo from './ChampionInfo';

class Champion extends Component {
  
  constructor(props) {
    super(props);
    this.championInfo = this.championInfo.bind(this);
  }

  championInfo() {
    return <ChampionInfo name={this.props.name}/>;
  }
 
  render() {
    return (
      <div className="champion-name-container">
        <p onClick={this.championInfo} className="champion">{this.props.attr.name}</p>
      </div>
    );
  }
}

export default Champion;
