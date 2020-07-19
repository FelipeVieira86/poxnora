import React, { Component } from 'react';

class AbilityDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      0: 'none',
      1: 'none',
      2: 'none',
      hover1: 'none',
      hover2: 'none',
      class1: 'hidden',
      class2: 'hidden',
      cost: this.props.noraCost,
      ablty1: this.props.AbilitySets[0].abilities.find((ablty) => ablty.default === true),
      ablty2: this.props.AbilitySets[1].abilities.find((ablty) => ablty.default === true),
    };
  }

  selectAbility1 = async (nora, ablty) => {
    await this.setState({
      cost: this.state.cost + (nora - this.state.ablty1.noraCost),
      ablty1: ablty,
      class1: this.state.class1 === '' ? 'hidden' : '',
    });
    return this.props.handler(this.state.cost);
  };

  selectAbility2 = async (nora, ablty) => {
    await this.setState({
      cost: this.state.cost + (nora - this.state.ablty2.noraCost),
      ablty2: ablty,
      class2: this.state.class2 === '' ? 'hidden' : '',
    });
    return this.props.handler(this.state.cost);
  };

  openAbility1 = () => {
    this.setState({ class1: this.state.class1 === '' ? 'hidden' : '', class2: 'hidden' });
  };

  openAbility2 = () => {
    this.setState({ class2: this.state.class2 === '' ? 'hidden' : '', class1: 'hidden' });
  };

  render() {
    // const { ablty1, ablty2 } = this.state;
    const { AbilitySets } = this.props;
    const ablty1 = AbilitySets[0].abilities.find((ablty) => ablty.default === true);
    const ablty2 = AbilitySets[1].abilities.find((ablty) => ablty.default === true);
    return (
      <div className="ability-upgrade-container">
        <div onClick={() => this.openAbility1()} className={`rune-back-ability-1`}>
          <img
            onMouseEnter={() => this.setState({ hover1: '' })}
            onMouseLeave={() => this.setState({ hover1: 'none' })}
            className="rune-back-ability-icon"
            src={`https://d2aao99y1mip6n.cloudfront.net/images/ability_icons/small/icon_${ablty1.iconName}.gif`}
            alt=""
          />
          <div
            onMouseEnter={() => this.setState({ hover1: '' })}
            onMouseLeave={() => this.setState({ hover1: 'none' })}
            className="rune-back-ability-info"
          >
            {ablty1.name}
            {ablty1.level === 0 ? '' : `(${ablty1.level})`}
          </div>

          <div style={{ display: this.state.hover1 }} className="ability-hover-info">
            <span>{ablty1.name}</span>
            <span>
              AP Cost: {ablty1.apCost} Cooldown: {ablty1.cooldown}
            </span>
            <span>{ablty1.shortDescription}</span>
          </div>
          <div className={`rune-back-ability-info bg-black ${this.state.class1}`}>
            <span className="ability-select">Select Ability</span>
            <div>
              {AbilitySets[0].abilities
                .sort((a, b) => a.level - b.level)
                .map((ablty, key) => (
                  <div
                    key={ablty.id}
                    // onClick={() => this.selectAbility1(ablty.noraCost, ablty)}
                    className={`ability-detail`}
                  >
                    <img
                      className="rune-back-ability-icon"
                      src={`https://d2aao99y1mip6n.cloudfront.net/images/ability_icons/small/icon_${ablty.iconName}.gif`}
                      alt=""
                    />

                    <div
                      onMouseEnter={() => this.setState({ [key]: '' })}
                      onMouseLeave={() => this.setState({ [key]: 'none' })}
                      className="rune-back-ability-info ablty-detail"
                    >
                      <div className="rune-ability-name">
                        <div>
                          {ablty.name} {ablty.level === 0 ? '' : `(${ablty.level})`}
                        </div>
                        <div>{`Add ${ablty.noraCost - this.state.ablty1.noraCost} Nora`}</div>
                      </div>
                    </div>
                    <div style={{ display: this.state[key] }} className="ability-hover-info">
                      <span>{ablty.name}</span>
                      <span>
                        AP Cost: {ablty.apCost} Cooldown: {ablty.cooldown}
                      </span>
                      <span>{ablty.shortDescription}</span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div onClick={() => this.openAbility2()} className={`rune-back-ability-2`}>
          <img
            onMouseEnter={() => this.setState({ hover2: '' })}
            onMouseLeave={() => this.setState({ hover2: 'none' })}
            className="rune-back-ability-icon"
            src={`https://d2aao99y1mip6n.cloudfront.net/images/ability_icons/small/icon_${ablty2.iconName}.gif`}
            alt=""
          />
          <div
            onMouseEnter={() => this.setState({ hover2: '' })}
            onMouseLeave={() => this.setState({ hover2: 'none' })}
            className="rune-back-ability-info"
          >
            {ablty2.name}
            {ablty2.level === 0 ? '' : `(${ablty2.level})`}
          </div>
          <div style={{ display: this.state.hover2 }} className="ability-hover-info">
            <span>{ablty2.name}</span>
            <span>
              AP Cost: {ablty2.apCost} Cooldown: {ablty2.cooldown}
            </span>
            <span>{ablty2.shortDescription}</span>
          </div>
          <div className={`rune-back-ability-info bg-black ${this.state.class2}`}>
            <span className="ability-select">Select Ability</span>
            <div>
              {AbilitySets[1].abilities
                .sort((a, b) => a.level - b.level)
                .map((ablty, key) => (
                  <div
                    key={ablty.id}
                    // onClick={() => this.selectAbility2(ablty.noraCost, ablty)}
                    className={`ability-detail`}
                  >
                    <img
                      className="rune-back-ability-icon"
                      src={`https://d2aao99y1mip6n.cloudfront.net/images/ability_icons/small/icon_${ablty.iconName}.gif`}
                      alt=""
                    />

                    <div
                      onMouseEnter={() => this.setState({ [key]: '' })}
                      onMouseLeave={() => this.setState({ [key]: 'none' })}
                      className="rune-back-ability-info ablty-detail"
                    >
                      <div className="rune-ability-name">
                        <div>
                          {ablty.name} {ablty.level === 0 ? '' : `(${ablty.level})`}
                        </div>
                        <div>{`Add ${ablty.noraCost - this.state.ablty2.noraCost} Nora`}</div>
                      </div>
                    </div>
                    <div style={{ display: this.state[key] }} className="ability-hover-info">
                      <span>{ablty.name}</span>
                      <span>
                        AP Cost: {ablty.apCost} Cooldown: {ablty.cooldown}
                      </span>
                      <span>{ablty.shortDescription}</span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AbilityDetails;
