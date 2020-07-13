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
            src={`https://d2aao99y1mip6n.cloudfront.net/_themes/global/frames/large/front/${this.props.faction1}.gif`}
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
        </div>
      </div>
    );
  }
}

export default ChampionInfo;
