import React, { Component } from 'react';
import ChampionInfo from './ChampionInfo';

import 'materialize-css/dist/css/materialize.min.css';
import { Modal } from 'react-materialize';

import '../styles/modal.css';

export default class Champion extends Component {
 
  render() {
    const { name } = this.props.attr;
    const trigger = <p className="champion">{name}</p>;

    const modalOptions = {
      preventScrolling: false,
      bottomSheet: false
    };

    return (
      <div className="champion-name-container">
        <Modal trigger={trigger} options={modalOptions} >
          <div className="modal-header">
            <button className='modal-close right'>X</button>
          </div>
          <ChampionInfo attr={this.props.attr}/>
        </Modal>
      </div>
    );
  }
}
