import React, { useState, useContext, createContext } from 'react';
import { Container, Frame, Title, Item, Inner, Header, Body } from './styles/accordion';

const ToggleContext = createContext();

export default function Accordion({ children }) {
  return (
    <Container>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Title = function AccordionTitle({ children }) {
  return <Title>{children}</Title>;
};

Accordion.Frame = function AccordionFrame({ children }) {
  return <Frame>{children}</Frame>;
};

Accordion.Item = function AccordionItem({ children }) {
  const [toggleShow, setToggleShow] = useState(false);

  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({ children }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);

  return (
    <Header onClick={() => setToggleShow(!toggleShow)}>
      {children}
      {toggleShow ? (
        <img src="/images/icons/close-slim.png" alt="Close" />
      ) : (
        <img src="/images/icons/add.png" alt="Open" />
      )}
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children }) {
  const { toggleShow } = useContext(ToggleContext);

  /* return toggleShow ? <Body>{children}</Body> : null; */

  return (
    <Body className={toggleShow ? 'open' : 'closed'}>
      <span>{children}</span>
    </Body>
  );
};
