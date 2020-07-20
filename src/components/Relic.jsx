import React, { Component } from 'react';
import RelicInfo from './RelicInfo'
import { Modal } from 'react-materialize';

class Relic extends Component {

  render() {
    const { name } = this.props.attr;
    const trigger = <p className="relic">{name}</p>;

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
            <RelicInfo attr={this.props.attr} />
          </div>
        </Modal>
      </div>
    );
  }
}

export default Relic;