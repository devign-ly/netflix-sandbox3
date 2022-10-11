import React from 'react';
import { Container, Row, Column, Link, Title, Break } from './styles/footer';

export default function Footer({ children }) {
  return <Container>{children}</Container>;
}

export function FooterRow({ children }) {
  return <Row>{children}</Row>;
}

export function FooterColumn({ children }) {
  return <Column>{children}</Column>;
}

export function FooterLink({ children }) {
  return <Link>{children}</Link>;
}

export function FooterTitle({ children }) {
  return <Title>{children}</Title>;
}

export function FooterBreak() {
  return <Break />;
}
