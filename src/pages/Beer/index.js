import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import api from '../../services/api';
import Container from '../../components/Container';
import { Product } from './styles';

export default class Beer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
    };
  }

  async componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    await api
      .get(`/beers/${id}`)
      .then(result => {
        const beer = result.data[0];
        console.log(beer.image_url);
        this.setState({ product: beer });
      })
      .catch(err => {
        console.log('ERRO: ', err);
      });
  }

  render() {
    const { product } = this.state;
    return (
      <Container>
        <Product>
          <img src={product.image_url} alt={product.name} />
          <div className="product-info">
            <strong>{product.name}</strong>
            <span>{product.tagline}</span>
            <p>{product.description}</p>
          </div>
        </Product>
        <div className="actions">
          <Link to="/">Início</Link>
        </div>
      </Container>
    );
  }
}

Beer.propTypes = {
  match: propTypes.shape({
    params: propTypes.shape({
      id: propTypes.number,
    }),
  }).isRequired,
};
