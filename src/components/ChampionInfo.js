import React, { Component } from 'react';

 import './style.css';

class ChampionInfo extends Component {

  render() {
    const assetEndpoint = 'https://d2aao99y1mip6n.cloudfront.net/_themes/global';
    const {
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
      RARE: 'rare'
    };

    const attributes = {
      cardBackground: `url('${assetEndpoint}/frames/large/front/1.gif'),
                      url('${assetEndpoint}/frames/large/lg_frame_rarity_${rarityMap[rarity]}.gif')`,
      cardFaction: `url('${assetEndpoint}/frames/large/faction_1_1.png'),
                    url('${assetEndpoint}/frames/large/faction_1_2.png')`
      }

    return (
      <div className="champion-info" style={{backgroundImage: attributes.cardBackground}}>
        <div className="rune-front">
          <div className="rune-info">
            <div className="rune-faction"></div>
            <span className="rune-name">{name}</span>
            <span className="rune-cost">{noraCost}</span>
          </div>
          <div className="rune-body">
            <img
              className="rune-image"
              src={`https://vignette.wikia.nocookie.net/poxnorafans/images/f/ff/${name.replace(' ', '_')}.jpg`}
              alt=""
            />
          </div>
          <div className="rune-stats">
            <div className="hidden rune-atk">{damage}</div>
            <div className="hidden rune-spd">{speed}</div>
            <div className="hidden rune-rng">{maxRng}</div>
            <div className="hidden rune-def">{defense}</div>
            <div className="hidden rune-hp">{hitPoints}</div>
          </div>
        </div>
        <div className="rune-back">
          
        </div>
      </div>
    );
  }
}

export default ChampionInfo;
