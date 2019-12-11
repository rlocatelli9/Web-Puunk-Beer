import React from 'react';

import { FaBeer } from 'react-icons/fa';
import { Container, Logo } from './styles';

import logoPunk from '../../assets/logo.png';

export default function Header() {
  return (
    <Container>
      <header>
        <nav>
          <img src={logoPunk} alt="Logo Punk Beer" />

          <div>
            <FaBeer />
          </div>
        </nav>
      </header>
    </Container>
  );
}
