import React, { Component } from 'react';

import Fa from 'react-fontawesome';

import { Block } from '../styles/block';
import { ModalTitle } from '../styles/modal';
import Input from '../styles/input';
import Button from '../styles/button';
import { Row } from '../styles/layout';
import Modal from './modal';

const Star = ({ active, onSubscribe, onUnsubscribe }) =>
  active
    ? <Fa name="star" onClick={onUnsubscribe} />
    : <Fa name="star-o" onClick={onSubscribe} />;

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentHash: '',
      favorites: [],
      isModalOpen: false,
      term: '',
    };
  }

  componentDidMount() {
    window.addEventListener('onGraphStateChange', this.onGraphStateChange);
  }

  componentWillUnmount() {
    window.removeEventListener('onGraphStateChange', this.onGraphStateChange);
  }

  onGraphStateChange = event =>
    this.setState(() => ({ currentHash: event.detail }));

  onSubscribe = (hash) => {
    this.setState(prevState => ({
      favorites: [...prevState.favorites, hash],
    }));
  };

  onUnsubscribe = (hash) => {
    this.setState(prevState => ({
      favorites: [...prevState.favorites].filter(favorite => favorite !== hash),
    }));
  };

  onChangeTerm = (event) => {
    this.setState({ term: event.target.value });
  };

  render() {
    return (
      <Block flexEnd>
        <Star
          active={this.state.favorites.includes(this.state.currentHash)}
          onSubscribe={() =>
            this.setState(() => ({ isModalOpen: true, term: '' }))}
          onUnsubscribe={() => this.onUnsubscribe(this.state.currentHash)}
        />
        <Modal
          isOpen={this.state.isModalOpen}
          toggle={() => this.setState(() => ({ isModalOpen: false }))}
        >
          <ModalTitle>
            Add to favorites
          </ModalTitle>
          <div style={{ width: '20em' }}>
            <form onSubmit={event => event.preventDefault()}>
              <Row
                style={{
                  alignItems: 'center',
                  padding: '0.6em',
                  paddingBottom: '1em',
                }}
              >
                <div style={{ width: 'calc(30% - 0.6em)' }}>Description</div>
                <div style={{ width: 'calc(70% - 0.6em)' }}>
                  <Input value={this.state.term} onChange={this.onChangeTerm} />
                </div>
              </Row>
              <Row>
                <Button color="secondary">
                  Cancel
                </Button>
                <Button color="primary">
                  Confirm
                </Button>
              </Row>
            </form>
          </div>
        </Modal>
      </Block>
    );
  }
}
