import React, { Component } from 'react';

import './style.css';

const modal = (attr) => {

};

class ChampionInfo extends Component {

  render() {
    const assetEndpoint = 'https://d2aao99y1mip6n.cloudfront.net/_themes/global';
    const {
      hash,
      rarity,
      name,
      noraCost, damage,
      speed,
      maxRng,
      defense,
      hitPoints
    } = this.props.attr;

    const rarityMap = {
      COMMON: 'com',
      UNCOMMON: 'uncom',
      RARE: 'rare',
      EXOTIC: 'exotic'
    };

    const attributes = {
      cardBackground: `url('${assetEndpoint}/frames/large/front/1.gif'),
                      url('${assetEndpoint}/frames/large/lg_frame_rarity_${rarityMap[rarity]}.gif')`,
      cardFaction: `url('${assetEndpoint}/frames/large/faction_1_1.png'),
                    url('${assetEndpoint}/frames/large/faction_1_2.png')`
    };

    return (
      <div className="champion-info" style={{backgroundImage: attributes.cardBackground}}>
        <div className="rune-front">
          <div className="rune-info">
            <div className="rune-faction" style={{backgroundImage: attributes.cardFaction}} ></div>
            <span className="rune-name">{name}</span>
            <span className="rune-cost">{noraCost}</span>
          </div>
          <div className="rune-body">
            <img
              className="rune-image"
              src={`https://d2aao99y1mip6n.cloudfront.net/images/runes/lg/${hash}.jpg`}
              alt=""
            />
          </div>
          <div className="rune-stats">
            <div className="rune-data">{damage}</div>
            <div className="rune-data">{speed}</div>
            <div className="rune-data">{maxRng}</div>
            <div className="rune-data">{defense}</div>
            <div className="rune-data">{hitPoints}</div>
          </div>
        </div>
        <div className="rune-back">
          
        </div>
      </div>
    );
  }
}

export default ChampionInfo;
