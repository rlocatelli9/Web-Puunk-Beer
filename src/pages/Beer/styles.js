import styled from 'styled-components';

export const Container = styled.div`
  .product-list {
    max-width: 700px;
    margin: 20px auto 0;
    padding: 0 20px;
  }

  .product-info h1 {
    font-size: 32px;
  }

  .product-info p {
    color: #666;
    line-height: 24px;
    margin-top: 5px;
  }

  .product-info p a {
    color: #069;
  }

  .actions {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .actions a {
    max-width: 700px;
    width: 100%;
    height: 42px;
    border-radius: 5px;
    border: 2px solid #445599;
    background: none;
    margin-top: 10px;
    color: #445599;
    font-weight: bold;
    font-size: 16px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s; /*em todos os efeitos*/
  }

  .actions a:hover {
    background: #445599;
    color: #fff;
  }
`;
