import React, { Component } from 'react';
import ChampionInfo from './ChampionInfo';

import { Modal } from 'react-materialize';

import 'materialize-css/dist/css/materialize.min.css';
import '../styles/modal.css';

// recebe filtro, usa o {name} da props recebida de ListTemplate.jsx , envia a props com o filtro pra ChampionInfo

export default class Champion extends Component {

  constructor(props){
    super(props);

    const modalOptions = {
      preventScrolling: true,
      bottomSheet: false
    };
  }

  render() {
    
    const { name } = this.props.attr;
    const trigger = <p className="champion" onClick={() => {this.forceUpdate()}} >{name}</p>;

    const { attr } = this.props;
    return (
      <div className="rune-name-container">
        <Modal trigger={trigger} options={this.modalOptions} >
          <div className="modal-header">
            <button className='modal-close right'>X</button>
          </div>
          <div className="modal-body">
            <ChampionInfo attr={attr}/>
          </div>
        </Modal>
      </div>
    );
  }
}
