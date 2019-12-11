import React from 'react';

import { FaBeer } from 'react-icons/fa';
import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <header>
        APBeer Web
        <FaBeer />
      </header>
    </Container>
  );
}
