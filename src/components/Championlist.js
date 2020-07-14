import React from 'react';
import Axios from 'axios';
import Champion from './Champion';
// import ChampionInfo from './ChampionInfo';
// import { useAsync } from 'react-async';

/* Use esse import para os testes e comente a linha 28*/
import { champs } from '../data/champs.json';

import 'materialize-css/dist/css/materialize.min.css';
import { Button, TextInput } from 'react-materialize';

import '../styles/style.css';

const getChamps = async () => {
  return new Promise(async (resolved, rejected) => {
    await Axios.get('https://www.poxnora.com/api/feed.do?t=json')
      .then(({ data }) => {
        resolved(data.champs);
      })
      .catch(err => {
        rejected(err);
      });
  });
};

export default class ChampionList extends React.Component {
  //const {data: champs} = useAsync({promiseFn: getChamps});
  
  constructor () {
    super();
    this.state = {
      filter: {
        visible: false,
        query: 'all'
      },
      page: 1,
      itemPerPage: 50,
    };

    this.totalPages = Math.floor(champs.length / this.state.itemPerPage);
  }

  changePage = (target) => {
    switch(target.getAttribute('label')){
      case 'prev':
        this.setState(state => ({
          page: state.page > 1 ? state.page-1 : this.totalPages
        }));
        break;
      case 'next':
        this.setState(state => ({
          page: state.page < this.totalPages ? state.page+1 : 1
        }));
        break;
      default:
        break;
    }
  };

  showFilters = () => {
    const menu = document.querySelector('#filter-area');
    this.state.filter.visible ?
      menu.classList.add('hidden') :
      menu.classList.remove('hidden');

    this.setState(({filter}) => (
      {
        filter: {
          visible: !filter.visible,
          query: filter.query
        }
      })
    );
  }

  setQuery = (target) => {
    this.setState(({filter}) => (
      {
        filter: {
          visible: filter.visible,
          query: target.value || 'all'
        }
      }
    ));
    this.setState({page: 1});
  }

  render() {
    const {page, itemPerPage} = this.state;
    const champsFiltered = !Array.isArray(champs) ? [] :
      this.state.filter.query === 'all' ? champs :
      champs.filter(({ name }) => name.toLowerCase().includes(this.state.filter.query.toLowerCase()));

    this.totalPages = Math.max(Math.floor(champsFiltered.length / itemPerPage), 1);

    return (
      <div className="rune-list-container">
        <div className="rune-count">
          <div>
            {champs.length} Champions
          </div>
          <div>
            <Button onClick={() => {this.showFilters()}}><i className="small material-icons">filter_list</i></Button>
          </div>
        </div>

        <div id="filter-area" className="rune-count hidden">
          <div>
            <TextInput onChange={({target}) => {this.setQuery(target)}} id="find" label="Termo" />
          </div>
        </div>

        <div className="rune-list">
          {
            (champsFiltered.length > 0) ?
              champsFiltered
              .slice((page - 1) * itemPerPage, page * itemPerPage)
              .map((champion, key) => <Champion key={key} attr={champion} />)
              : 'Carregando...'
            }
        </div>

        <div className="rune-navigation">
          <Button onClick={({target}) => {this.changePage(target)}} label="prev">Prev</Button>
          <div>{page} / {this.totalPages}</div>
          <Button onClick={({target}) => {this.changePage(target)}} label="next">Next</Button>
        </div>

      </div>
    );
  }
}
