import React from 'react';
import { Container, Title, List, Item, Picture, Name } from './styles/profiles';

export default function Profiles({ children }) {
  return <Container>{children}</Container>;
}

export function ProfilesTitle({ children }) {
  return <Title>{children}</Title>;
}

export function ProfilesList({ children }) {
  return <List>{children}</List>;
}

export function ProfilesUser({ onClick, children }) {
  return <Item onClick={onClick}>{children}</Item>;
}

export function ProfilesPicture({ src }) {
  return <Picture src={src ? `/images/users/${src}.png` : '/images/misc/loading.gif'} />;
}

export function ProfilesName({ children }) {
  return <Name>{children}</Name>;
}
