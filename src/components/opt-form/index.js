import React from 'react';
import { Container, Input, Break, Button, Text } from './styles/opt-form';

export default function OptForm({ children }) {
  return <Container>{children}</Container>;
}

OptForm.Input = function OptFormInput({ placeholder }) {
  return <Input placeholder={placeholder} />;
};

OptForm.Button = function OptFormButton({ children }) {
  return (
    <Button>
      {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
    </Button>
  );
};

OptForm.Text = function OptFormText({ children }) {
  return <Text>{children}</Text>;
};

OptForm.Break = function OptFormBreak() {
  return <Break />;
};
