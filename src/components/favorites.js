import React, { Component } from 'react';

import Fa from 'react-fontawesome';

import { Block } from '../styles/block';
import { ModalTitle } from '../styles/modal';
import Input from '../styles/input';
import Button from '../styles/button';
import { Row } from '../styles/layout';
import Modal from './modal';

const Star = ({ active, onSubscribe, onUnsubscribe }) =>
  (<Block onClick={active ? onUnsubscribe : onSubscribe}>
    {active ? <Fa name="star" /> : <Fa name="star-o" />}
  </Block>);

const saveFavorites = (favorites) => {
  window.localStorage.setItem('favorites', JSON.stringify(favorites));
};

const restoreFavorites = () =>
  JSON.parse(window.localStorage.getItem('favorites')) || [];

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

  componentWillMount() {
    this.setState(() => ({ favorites: restoreFavorites() }));
  }

  componentDidMount() {
    window.addEventListener('onGraphStateChange', this.onGraphStateChange);
  }

  componentWillUnmount() {
    window.removeEventListener('onGraphStateChange', this.onGraphStateChange);
  }

  onGraphStateChange = event =>
    this.setState(() => ({ currentHash: event.detail }));

  onSubscribe = (hash, description) => {
    this.setState((prevState) => {
      const favorites = [...prevState.favorites, { hash, description }];
      saveFavorites(favorites);
      return {
        favorites,
      };
    });
  };

  onUnsubscribe = (hash) => {
    this.setState((prevState) => {
      const favorites = [...prevState.favorites].filter(
        favorite => favorite.hash !== hash,
      );
      saveFavorites(favorites);
      return {
        favorites,
      };
    });
  };

  onChangeTerm = (event) => {
    this.setState({ term: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();

    const term = this.state.term;
    this.onSubscribe(this.state.currentHash, term);
    this.setState(() => ({ isModalOpen: false, term: '' }));
  };

  render() {
    return (
      <span style={{ alignSelf: 'flex-end' }}>
        <Star
          active={this.state.favorites
            .map(favorite => favorite.hash)
            .includes(this.state.currentHash)}
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
            <form onSubmit={this.onSubmit}>
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
                <Button
                  color="secondary"
                  type="button"
                  onClick={() => this.setState(() => ({ isModalOpen: false }))}
                >
                  Cancel
                </Button>
                <Button color="primary" type="submit" onClick={this.onSubmit}>
                  Confirm
                </Button>
              </Row>
            </form>
          </div>
        </Modal>
      </span>
    );
  }
}
