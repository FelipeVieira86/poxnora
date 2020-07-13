import React, { Component } from 'react';

class ChampionInfo extends Component {
  render() {
    return (
      <div>
        <div className="rune-front">
          <div className="rune-info">
            <div className="rune-faction">
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
            <span className="rune-name">{this.props.name}</span>
            <span className="rune-cost">{this.props.cost}</span>
          </div>
          <img
            className="rune-frame"
            src="https://d2aao99y1mip6n.cloudfront.net/_themes/global/frames/large/front/1.gif"
            alt=""
          />
          <img
            className="rune-rarity"
            src={`https://d2aao99y1mip6n.cloudfront.net/_themes/global/frames/large/lg_frame_rarity_${this.props.rarity}.gif`}
            alt=""
          />
          <img
            className="rune-image"
            src={`https://d2aao99y1mip6n.cloudfront.net/images/runes/lg/${this.props.image}.jpg`}
            alt=""
          />
          <div className="rune-stats">
            <div className="rune-atk">{this.props.atk}</div>
            <div className="rune-spd">{this.props.spd}</div>
            <div className="rune-rng">{this.props.rng}</div>
            <div className="rune-def">{this.props.def}</div>
            <div className="rune-hp">{this.props.hp}</div>
          </div>
        </div>
        <div className="rune-back">
          
        </div>
      </div>
    );
  }
}

export default ChampionInfo;
