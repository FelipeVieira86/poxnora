import React, { Component } from 'react';

import Champion from '../Champion';
import Equip from '../Equip';
import Relic from '../Relic';
import Spell from '../Spell';

import 'materialize-css/dist/css/materialize.min.css';
import { Button } from 'react-materialize';

import '../../styles/style.css';

// filtro ocorre nesse arquivo, envia como props pra Champion.jsx
// bug só ocorre com os champions, os outros 3 tipos de carta estão funcionando perfeitamente
class List extends Component {
  constructor() {
    super();
    this.state = {
      page: 1,
      itemPerPage: 21,
    };
    this.totalPages = 1;
  }

  // função que controla as cartas mostradas por páginas
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

    // recebe o props com o array de objetos, e filtra por faction
    const factionFilter = !Array.isArray(data)
      ? []
      : faction === 'all'
      ? data
      : data.filter(({ factions }) => factions.includes(faction));

    // recebe o filtro de faction e filtra mais uma vez por raça
    const raceFilter = !Array.isArray(factionFilter)
      ? []
      : race === 'all' || target !== 'Champion'
      ? factionFilter
      : factionFilter.filter(({races}) => races.includes(race))

    // recebe o filtro de raça e filtra por classe
    const items = !Array.isArray(raceFilter)
      ? []
      : classe === 'all' || target !== 'Champion'
      ? raceFilter
      : raceFilter.filter(({classes}) => classes.includes(classe))

    // recebe o filtro por classe e filtra por nome / habilidade / texto da carta
    const listFiltered = !Array.isArray(items)
      ? []
      : search === 'all'
      ? items
      // caso o target não seja champion faz o filtro somente por nome ou texto da descrição
      : target !== 'Champion'
      ? items.filter(({ name, description }) => {
          return (
            name.toLowerCase().includes(search.toLowerCase()) ||
            description.toLowerCase().includes(search.toLowerCase())
          );
        })
      // caso seja target champion, faz o filtro por nome ou habilidade...
      // primeiro faz o filter por nome
      : items.filter(({ name, abilitySets, startingAbilities }) => {
          return (
            name.toLowerCase().includes(search.toLowerCase()) ||
            // depois procura por habilidade
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
