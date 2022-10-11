import React, { useState, useContext, createContext } from 'react';

import {
  Container,
  Group,
  Title,
  SubTitle,
  Text,
  Feature,
  FeatureTitle,
  FeatureText,
  FeatureClose,
  Maturity,
  Content,
  Meta,
  Entities,
  Item,
  Image,
} from './styles/card';

export const FeatureContext = createContext();

export default function Card({ children }) {
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState({});

  return (
    <FeatureContext.Provider value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}>
      <Container>{children}</Container>
    </FeatureContext.Provider>
  );
}

export function CardGroup({ children }) {
  return <Group>{children}</Group>;
}

export function CardTitle({ children }) {
  return <Title>{children}</Title>;
}

export function CardSubTitle({ children }) {
  return <SubTitle>{children}</SubTitle>;
}

export function CardText({ children }) {
  return <Text>{children}</Text>;
}

export function CardEntities({ children }) {
  return <Entities>{children}</Entities>;
}

export function CardMeta({ children }) {
  return <Meta>{children}</Meta>;
}

export function CardItem({ item, children }) {
  const { setShowFeature, setItemFeature } = useContext(FeatureContext);

  return (
    <Item
      onClick={() => {
        setItemFeature(item);
        setShowFeature(true);
      }}
    >
      {children}
    </Item>
  );
}

export function CardImage({ src }) {
  return <Image src={src} />;
}

export function CardFeature({ children, category }) {
  const { showFeature, itemFeature, setShowFeature } = useContext(FeatureContext);

  if (!showFeature) return null;

  return (
    <Feature src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}>
      <Content>
        <FeatureTitle>{itemFeature.title}</FeatureTitle>
        <FeatureText>{itemFeature.description}</FeatureText>
        <FeatureClose onClick={() => setShowFeature(false)}>
          <img src="/images/icons/close.png" alt="Close" />
        </FeatureClose>

        <Group margin="30px 0" flexDirection="row" alignItems="center">
          <Maturity rating={itemFeature.maturity}>{itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}</Maturity>
          <FeatureText fontWeight="bold">
            {itemFeature.genre.charAt(0).toUpperCase() + itemFeature.genre.slice(1)}
          </FeatureText>
        </Group>

        {children}
      </Content>
    </Feature>
  );
}
