import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import Container from '../../components/Container';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      page: 1,
    };
  }

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async (page = 1) => {
    const response = await api.get(`/beers?page=${page}`);
    const { data } = response;
    this.setState({ products: data, page });
  };

  prevPage = () => {
    const { page } = this.state;
    if (page === 1) return;

    const pageNumber = page - 1;
    this.loadProducts(pageNumber);
  };

  nextPage = () => {
    const { page } = this.state;
    if (page === 13) return;

    const pageNumber = page + 1;
    this.loadProducts(pageNumber);
  };

  render() {
    const { products, page } = this.state;
    return (
      <Container>
        <div className="product-list">
          {products.map(product => (
            <article key={product.id}>
              <strong>{product.name}</strong>
              <p>{product.tagline}</p>

              <Link to={`/beers/${product.id}`}>Acessar</Link>
            </article>
          ))}
          <div className="actions">
            <button type="submit" disabled={page === 1} onClick={this.prevPage}>
              Anterior
            </button>
            <button
              type="submit"
              disabled={page === 13}
              onClick={this.nextPage}
            >
              Próximo
            </button>
          </div>
        </div>
      </Container>
    );
  }
}
