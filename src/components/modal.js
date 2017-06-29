import React, { Component } from 'react';

import {
  Modal,
  ModalDialog,
  ModalContent,
  ModalBackdrop,
} from '../styles/modal';

export default class extends Component {
  componentDidMount() {
    window.addEventListener('keyup', this.escape);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.escape);
  }

  escape = (event) => {
    if (event.keyCode === 27) {
      this.props.toggle();
    }
  };

  render() {
    return (
      <div>
        <ModalBackdrop show={this.props.isOpen} onClick={this.props.toggle} />
        <Modal show={this.props.isOpen}>
          <ModalDialog>
            <ModalContent>
              {this.props.children}
            </ModalContent>
          </ModalDialog>
        </Modal>
      </div>
    );
  }
}
