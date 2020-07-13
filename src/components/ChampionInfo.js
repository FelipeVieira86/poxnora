import React, { Component } from 'react';

import './style.css';

const modal = attr => {};

class ChampionInfo extends Component {
  render() {
    const assetEndpoint = 'https://d2aao99y1mip6n.cloudfront.net/_themes/global';
    const {
      hash,
      rarity,
      name,
      noraCost,
      damage,
      speed,
      maxRng,
      defense,
      hitPoints,
    } = this.props.attr;

    const rarityMap = {
      COMMON: 'com',
      UNCOMMON: 'uncom',
      RARE: 'rare',
      EXOTIC: 'exotic',
      LEGENDARY: undefined, //mudar
      LIMITED: undefined //mudar
    };

    const attributes = {
      cardBackground: `url('${assetEndpoint}/frames/large/front/1.gif'),
                      url('${assetEndpoint}/frames/large/lg_frame_rarity_${rarityMap[rarity] || 'exotic'}.gif')`,
      cardFaction: `url('${assetEndpoint}/frames/large/faction_1_1.png'),
                    url('${assetEndpoint}/frames/large/faction_1_2.png')`,
    };

    return (
      <div className="champion-info" style={{ backgroundImage: attributes.cardBackground }}>
        <div className="rune-front">
          <div className="rune-info">
            <div className="rune-faction" style={{ backgroundImage: attributes.cardFaction }}></div>
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
        {/* <div className="rune-back">
          <img
            src={`https://d2aao99y1mip6n.cloudfront.net/_themes/global/frames/large/back/${this.props.faction1}.gif`}
            alt=""
          />
          <div className="rune-back-faction">
            <img
              className="rune-faction-1"
              src={`https://d2aao99y1mip6n.cloudfront.net/_themes/global/frames/large/faction_${this.props.faction1}_1.png`}
              alt=""
            />
            <img
              className="rune-faction-2"
              src={`https://d2aao99y1mip6n.cloudfront.net/_themes/global/frames/large/faction_${this.props.faction2}_2.png`}
              alt=""
            />
          </div>
          <div className="rune-back-name">{this.props.type}</div>
          <div className="rune-back-flavor">{this.props.flavor}</div>
          <div className="rune-back-abilities">
            <div className="rune-back-ability">
              <img
                className="rune-back-ability-icon"
                src={`https://d2aao99y1mip6n.cloudfront.net/images/ability_icons/small/icon_${this.props.ability1[0][1]}.gif`}
                alt=""
              />
              <div className="rune-back-ability-info">{this.props.ability1[0][0]}</div>
            </div>
            <div className="rune-back-ability">
              <div>
                <img
                  className="rune-back-ability-icon"
                  src={`https://d2aao99y1mip6n.cloudfront.net/images/ability_icons/small/icon_${this.props.ability2[0][1]}.gif`}
                  alt=""
                />
              </div>
              <div className="rune-back-ability-info">{this.props.ability2[0][0]}</div>
            </div>
            {this.props.abilities.map(ability => {
              return (
                <div className="rune-back-ability">
                  <img
                    className="rune-back-ability-icon"
                    src={`https://d2aao99y1mip6n.cloudfront.net/images/ability_icons/small/icon_${ability[1]}.gif`}
                    alt=""
                  />
                  <div className="rune-back-ability-info">{ability[0]}</div>
                </div>
              );
            })}
          </div>
          <div className="rune-back-attributes">
            <div>
              Deck Limit: <span className="rune-back-attributes-value">{this.props.limit}</span>
            </div>
            <div>
              Races:{' '}
              <span className="rune-back-attributes-value">{this.props.races.join(', ')}</span>
            </div>
            <div>
              Classes:{' '}
              <span className="rune-back-attributes-value">{this.props.classes.join(', ')}</span>
            </div>
            <div>
              Size:{' '}
              <span className="rune-back-attributes-value">
                {this.props.size}x{this.props.size}
              </span>
            </div>
          </div>
          <div className="rune-back-idol">
            <img
              className="rune-idol"
              src={`https://d2aao99y1mip6n.cloudfront.net/images/runes/idols/${this.props.image}.gif`}
              alt=""
            />
          </div>
        </div>
        <div className="rune-set">
          Expansion: <span className="rune-back-attributes-value">{this.props.exp}</span>
        </div> */}
      </div>
    );
  }
}

export default ChampionInfo;
