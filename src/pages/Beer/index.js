import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

export default class Beer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    api
      .get(`/beers/${id}`)
      .then(function(response) {
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
    // this.setState({ product: data });
  }

  render() {
    // const { product } = this.state;
    return (
      <>
        <div className="product-info">
          <strong>{this.state.product.name}</strong>
          <p>{this.state.product.description}</p>

          <p>
            URL:{' '}
            <a href={this.state.product.image_url}>
              {this.state.product.image_url}
            </a>
          </p>
        </div>
        <div className="actions">
          <Link to="/">Início</Link>
        </div>
      </>
    );
  }
}
