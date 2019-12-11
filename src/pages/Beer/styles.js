import styled from 'styled-components';

export const Product = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 70px;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 16px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;
