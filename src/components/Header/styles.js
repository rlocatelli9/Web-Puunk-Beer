import styled from 'styled-components';

export const Container = styled.header`
  background: #4555c6;
  display: flex;
  justify-content: center;

  header nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;
    padding: 0 42px;
    color: #fff;
    min-width: 980px;
    font-size: 25px;
  }

  nav > div {
    display: flex;
    align-items: center;
    font-size: 30px;
  }
`;
