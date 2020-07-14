import React, { Component } from 'react';
import SpellInfo from './SpellInfo';
import { Modal } from 'react-materialize';

class Spell extends Component {
  render() {
    const { name } = this.props.attr;
    const trigger = <p className="spell">{name}</p>;

    const modalOptions = {
      preventScrolling: false,
      bottomSheet: false,
    };
    return (
      <div className="rune-name-container">
        <Modal trigger={trigger} options={modalOptions}>
          <div className="modal-header">
            <button className="modal-close right">X</button>
          </div>
          <div className="modal-body">
            <SpellInfo attr={this.props.attr} />
          </div>
        </Modal>
      </div>
    );
  }
}

export default Spell;
