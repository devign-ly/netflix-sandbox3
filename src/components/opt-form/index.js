import React from 'react';
import { Container, Input, Break, Button, Text } from './styles/opt-form';

export default function OptForm({ children }) {
  return <Container>{children}</Container>;
}

export function OptFormInput({ placeholder }) {
  return <Input placeholder={placeholder} />;
}

export function OptFormButton({ children }) {
  return (
    <Button>
      {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
    </Button>
  );
}

export function OptFormText({ children }) {
  return <Text>{children}</Text>;
}

export function OptFormBreak() {
  return <Break />;
}
