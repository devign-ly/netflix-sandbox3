import React from 'react';
import { Frame, Item, Inner, Pane, Title, SubTitle, Image } from './styles/jumbotron';

export default function Jumbotron({ children, direction = 'row' }) {
  return (
    <Item>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
}

export function JumbotronFrame({ children }) {
  return <Frame>{children}</Frame>;
}

export function JumbotronPane({ children }) {
  return <Pane>{children}</Pane>;
}

export function JumbotronTitle({ children }) {
  return <Title>{children}</Title>;
}

export function JumbotronSubTitle({ children }) {
  return <SubTitle>{children}</SubTitle>;
}

export function JumbotronImage({ src, alt }) {
  return <Image src={src} alt={alt} />;
}
