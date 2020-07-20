import React, { Component } from 'react';

import Champion from '../Champion';
import Equip from '../Equip';
import Relic from '../Relic';
import Spell from '../Spell';

import 'materialize-css/dist/css/materialize.min.css';
import { Button } from 'react-materialize';

import '../../styles/style.css';

// filtro ocorre nesse arquivo, envia como props pra Champion.jsx

class List extends Component {
  constructor() {
    super();
    this.state = {
      page: 1,
      itemPerPage: 21,
    };
    this.totalPages = 1;
  }

  changePage = (target) => {
    switch (target.getAttribute('label')) {
      case 'prev':
        this.setState((state) => ({
          page: state.page > 1 ? state.page - 1 : this.totalPages,
        }));
        break;
      case 'next':
        this.setState((state) => ({
          page: state.page < this.totalPages ? state.page + 1 : 1,
        }));
        break;
      default:
        break;
    }
  };

  render() {
    const { page, itemPerPage } = this.state;
    const { search, data, target, faction, race, classe } = this.props;

    const factionFilter = !Array.isArray(data)
      ? []
      : faction === 'all'
      ? data
      : data.filter(({ factions }) => factions.includes(faction));

    const raceFilter = !Array.isArray(factionFilter)
    ? []
    : race === 'all' || target !== 'Champion'
    ? factionFilter
    : factionFilter.filter(({races}) => races.includes(race))

    const items = !Array.isArray(raceFilter)
    ? []
    : classe === 'all' || target !== 'Champion'
    ? raceFilter
    : raceFilter.filter(({classes}) => classes.includes(classe))
 
    const listFiltered = !Array.isArray(items)
      ? []
      : search === 'all'
      ? items
      : target !== 'Champion'
      ? items.filter(({ name, description }) => {
          return (
            name.toLowerCase().includes(search.toLowerCase()) ||
            description.toLowerCase().includes(search.toLowerCase())
          );
        })
      : items.filter(({ name, abilitySets, startingAbilities }) => {
          return (
            name.toLowerCase().includes(search.toLowerCase()) ||
            abilitySets.filter((abilityset) =>
              abilityset.abilities.find((ability) =>
                ability.name.toLowerCase().includes(search.toLowerCase()),
              ),
            ).length > 0 ||
            startingAbilities.filter((ability) =>
              ability.name.toLowerCase().includes(search.toLowerCase()),
            ).length > 0
          );
        });

    this.totalPages = Math.max(Math.floor(listFiltered.length / itemPerPage) + 1, 1);

    if (page > this.totalPages) this.setState({ page: 1 });

    return (
      <div className="rune-list-container">
        <div className="rune-count">
          <div>
            {listFiltered.length} {target}
          </div>
        </div>
        <div className="rune-list">
          <div className="rune-list-area">
            {listFiltered.length > 0
              ? listFiltered
                  .slice((page - 1) * itemPerPage, page * itemPerPage)
                  .map((item, key) => {
                    switch (target) {
                      case 'Champion':
                        return <Champion key={key} attr={item} />;
                      case 'Equip':
                        return <Equip key={key} attr={item} />;
                      case 'Relic':
                        return <Relic key={key} attr={item} />;
                      default:
                        return <Spell key={key} attr={item} />;
                    }
                  })
              : 'No data found.'}
          </div>
        </div>

        <div className="rune-navigation">
          <Button
            onClick={({ target }) => {
              this.changePage(target);
            }}
            label="prev"
          >
            Prev
          </Button>
          {/* <div>
            {page} / {this.totalPages}
          </div> */}
          <Button
            onClick={({ target }) => {
              this.changePage(target);
            }}
            label="next"
          >
            Next
          </Button>
        </div>
      </div>
    );
  }
}

export default List;
