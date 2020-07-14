import React, { Component } from 'react';
import '../styles/runeInfo.css';

class SpellInfo extends Component {
  render() {
    const assetEndpoint = 'https://d2aao99y1mip6n.cloudfront.net/_themes/global';
    const {
      hash,
      factions,
      rarity,
      name,
      noraCost,
      artist,
      description,
      flavorText,
      deckLimit,
      runeSet,
    } = this.props.attr;

    const rarityMap = {
      COMMON: 'com',
      UNCOMMON: 'uncom',
      RARE: 'rare',
      EXOTIC: 'exotic',
      LEGENDARY: 'pe',
      LIMITED: 'le',
    };

    const faction = {
      'Forsaken Wastes': 1,
      'Sundered Lands': 2,
      'Ironfist Stronghold': 3,
      Underdepths: 4,
      "K'thir Forest": 5,
      'Forglar Swamp': 6,
      'Savage Tundra': 7,
      'Shattered Peaks': 8,
    };

    const attributes = {
      cardfrontBackground: `${assetEndpoint}/frames/large/front/${
        factions.length === 1
          ? faction[factions[0]]
          : `${faction[factions[0]]}_${faction[factions[1]]}`
      }.gif`,
      cardImage: `https://d2aao99y1mip6n.cloudfront.net/images/runes/lg/${hash}.jpg`,
      cardRarity: `${assetEndpoint}/frames/large/lg_frame_rarity_${rarityMap[rarity]}.gif`,
      cardbackBackground: `url('${assetEndpoint}/frames/large/back/${
        factions.length === 1
          ? faction[factions[0]]
          : `${faction[factions[0]]}_${faction[factions[1]]}`
      }.gif')`,
      cardFaction: `${assetEndpoint}/frames/large/faction_${faction[factions[0]]}_1.png`,
      cardFaction2: `${assetEndpoint}/frames/large/faction_${
        factions.length === 1 ? faction[factions[0]] : faction[factions[1]]
      }_2.png`,
    };

    return (
      <div className="rune-container">
        <div className="rune-preview">
          <div className="rune-front">
            <img className="rune-front-frame" src={attributes.cardfrontBackground} alt="" />
            <img className="rune-front-image" src={attributes.cardImage} alt="" />
            <img className="rune-front-rarity" src={attributes.cardRarity} alt="" />
            <div className="rune-front-faction">
              <img className="rune-faction-icon-1" src={attributes.cardFaction} alt="" />
              <img className="rune-faction-icon-2" src={attributes.cardFaction2} alt="" />
            </div>
            <span className="rune-front-name">{name}</span>
            <span className="rune-cost">{noraCost}</span>
            <div className="rune-artist">
              Illustrated By:
              <span className="rune-artist-name">{` ${artist}`}</span>
            </div>
          </div>
          <div className="rune-back" style={{ backgroundImage: attributes.cardbackBackground }}>
            <div className="rune-back-faction">
              <img className="rune-faction-icon-1" src={attributes.cardFaction} alt="" />
              <img className="rune-faction-icon-2" src={attributes.cardFaction2} alt="" />
            </div>
            <div className="rune-back-name">Spell</div>
            <div className="rune-back-flavor">{flavorText}</div>
            <div className="rune-back-description-container">
              <div className="rune-back-description">{description}</div>
            </div>
            <div className="rune-back-attributes">
              <div>
                Deck Limit: <span className="rune-back-attributes-value">{deckLimit}</span>
              </div>
            </div>
            <div className="rune-set">
              Expansion: <span className="rune-back-attributes-value">{runeSet}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SpellInfo;
