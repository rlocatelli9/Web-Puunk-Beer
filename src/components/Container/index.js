import styled from 'styled-components';

const Container = styled.div`
  .product-list {
    max-width: 700px;
    margin: 20px auto 0;
    padding: 0 20px;
  }

  .product-list article {
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 20px;
  }

  .product-list article p {
    font-size: 16px;
    color: #999;
    margin-top: 5px;
    line-height: 24px;
  }

  .product-list article a {
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
    transition: all 0.2s;
  }

  .product-list article a:hover {
    background: #445599;
    color: #fff;
  }

  .product-list .actions {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .product-list .actions button {
    padding: 10px;
    border-radius: 5px;
    border: 0;
    background: #445599;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
  }

  .product-list .actions button:hover {
    opacity: 0.7;
  }

  .product-list .actions button[disabled] {
    opacity: 0.5;
    cursor: default;
  }

  .product-list .actions button[disabled]:hover {
    opacity: 0.5;
  }
`;

export default Container;
