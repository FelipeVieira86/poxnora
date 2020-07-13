import React, { Component } from 'react';
// import ChampionInfo from './ChampionInfo';

class Champion extends Component {
  // constructor(props) {
  //   super(props);
  //   this.championInfo = this.championInfo.bind(this);
  // }

  // championInfo() {
  //   console.log('list')
  // }

  render() {
    const { name } = this.props.champ;
    return (
      <div>
        <p onClick={this.championInfo} className="champion">
          {name}
        </p>
      </div>
    );
  }
}

export default Champion;
