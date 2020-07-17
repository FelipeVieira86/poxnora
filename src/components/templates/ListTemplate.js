import React, { Component } from 'react';

import Champion from '../Champion';
import Equip from '../Equip';
import Relic from '../Relic';
import Spell from '../Spell';

import 'materialize-css/dist/css/materialize.min.css';
import { Button } from 'react-materialize';

import '../../styles/style.css';

/*
// PROPS - search, items, target
*/

class List extends Component {
  constructor() {
    super();
    this.state = {
      page: 1,
      itemPerPage: 50,
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
    const { search, items, target } = this.props;

    const listFiltered = !Array.isArray(items)
      ? []
      : search === 'all'
      ? items
      : target !== 'Champion'
      ? items.filter(({ name }) => {
          return name.toLowerCase().includes(search.toLowerCase());
        })
      : items.filter(({ name, abilitySets, startingAbilities }) => {
          console.log(
            startingAbilities.filter((ability) =>
              ability.name.toLowerCase().includes(search.toLowerCase()),
            ),
          );
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

    this.totalPages = Math.max(Math.floor(listFiltered.length / itemPerPage), 1);

    if (page > this.totalPages) this.setState({ page: 1 });

    return (
      <div className="rune-list-container">
        <div className="rune-count">
          <div>
            {listFiltered.length} {target}
          </div>
        </div>

        <div className="rune-list">
          {listFiltered.length > 0
            ? listFiltered.slice((page - 1) * itemPerPage, page * itemPerPage).map((item, key) => {
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
            : 'No runes matching these filters found.'}
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
          <div>
            {page} / {this.totalPages}
          </div>
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
