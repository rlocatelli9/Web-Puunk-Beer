import React from 'react';

import { FaBeer } from 'react-icons/fa';
import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <header>
        <nav>
          <h1>WebPunk</h1>
          <div>
            <FaBeer />
          </div>
        </nav>
      </header>
    </Container>
  );
}
