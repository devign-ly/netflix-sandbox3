import React from 'react';
import { Container, Title, List, Item, Picture, Name } from './styles/profiles';

export default function Profiles({ children }) {
  return <Container>{children}</Container>;
}

Profiles.Title = function ProfilesTitle({ children }) {
  return <Title>{children}</Title>;
};

Profiles.List = function ProfilesList({ children }) {
  return <List>{children}</List>;
};

Profiles.User = function ProfilesUser({ onClick, children }) {
  return <Item onClick={onClick}>{children}</Item>;
};

Profiles.Picture = function ProfilesPicture({ src }) {
  return <Picture src={src ? `/images/users/${src}.png` : '/images/misc/loading.gif'} />;
};

Profiles.Name = function ProfilesName({ children }) {
  return <Name>{children}</Name>;
};
