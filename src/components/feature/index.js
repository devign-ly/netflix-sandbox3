import React from 'react';
import { Container, Title, SubTitle } from './styles/feature';

export default function Feature({ children }) {
  return <Container>{children}</Container>;
}

export function FeatureTitle({ children }) {
  return <Title>{children}</Title>;
}

export function FeatureSubTitle({ children }) {
  return <SubTitle>{children}</SubTitle>;
}
