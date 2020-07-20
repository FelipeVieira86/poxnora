import React, { Component } from 'react';
import EquipInfo from './EquipInfo';
import { Modal } from 'react-materialize';

class Equip extends Component {
  render() {
    const { name } = this.props.attr;
    const trigger = <p className="equip">{name}</p>;

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
            <EquipInfo attr={this.props.attr} />
          </div>
        </Modal>
      </div>
    );
  }
}

export default Equip;
