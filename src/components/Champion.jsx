import React, { Component } from 'react';
import ChampionInfo from './ChampionInfo';

import { Modal } from 'react-materialize';

import 'materialize-css/dist/css/materialize.min.css';
import '../styles/modal.css';

// recebe filtro, usa o {name} da props recebida, envia a props com o filtro pra ChampionInfo

export default class Champion extends Component {
  render() {
    
    const { name } = this.props.attr;
    const trigger = <p className="champion">{name}</p>;

    const modalOptions = {
      preventScrolling: true,
      bottomSheet: false
    };

    return (
      <div className="rune-name-container">
        <Modal trigger={trigger} options={modalOptions} >
          <div className="modal-header">
            <button className='modal-close right'>X</button>
          </div>
          <div className="modal-body">
            <ChampionInfo attr={this.props.attr}/>
          </div>
        </Modal>
      </div>
    );
  }
}
