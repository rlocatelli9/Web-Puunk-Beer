import styled from 'styled-components';

export const Product = styled.header`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .product-info {
    max-width: 700px;
    margin: 20px auto 0;
    padding: 20px;
    background: #fff;
    border-radius: 5px;
    border: 1px solid #ddd;
    box-sizing: border-box;
  }

  .product-info h1 {
    font-size: 30px;
  }

  .product-tag {
    color: #333 !important;
    margin-top: 5px;
  }

  .product-info p {
    color: #666;
    line-height: 24px;
    margin-top: 5px;
  }

  img {
    width: 70px;
    margin-top: 20px;
  }

  a {
    margin: 20px 0px;
    color: #445599;
    font-size: 16px;
    text-decoration: none;
  }
`;
