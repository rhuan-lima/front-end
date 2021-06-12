import React from 'react';
import { ReactComponent as LoadIcon } from './assets/eclipse.svg';
import { Container } from './styles';

export const Loading = () => {
  return (
    <Container>
      <LoadIcon />
    </Container>
  )
}