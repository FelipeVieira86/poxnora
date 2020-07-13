import React, { Component } from 'react';
import ChampionInfo from './ChampionInfo';

class Champion extends Component {
  
  constructor(props) {
    super(props);
    this.championInfo = this.championInfo.bind(this);
  }

  championInfo() {
    console.log('list')
    return <ChampionInfo name={this.props.name}/>;
  }
 
  render() {
    return (
      <div>
        <p onClick={this.championInfo} className="champion">{this.props.name}</p>
      </div>
    );
  }
}

export default Champion;
