import React from 'react';
import { Container, Error, Base, Title, Text, TextSmall, Link, Input, Submit } from './styles/form';

export default function Form({ children }) {
  return <Container>{children}</Container>;
}

Form.Error = function FormError({ children }) {
  return <Error>{children}</Error>;
};

Form.Base = function FormBase({ onSubmit, method, children }) {
  return (
    <Base onSubmit={onSubmit} method={method}>
      {children}
    </Base>
  );
};

Form.Title = function FormTitle({ children }) {
  return <Title>{children}</Title>;
};

Form.Text = function FormText({ children }) {
  return <Text>{children}</Text>;
};

Form.TextSmall = function FormTextSmall({ children }) {
  return <TextSmall>{children}</TextSmall>;
};

Form.Link = function FormLink({ to, children }) {
  return <Link to={to}>{children}</Link>;
};

Form.Input = function FormInput({ type, placeholder, value, onChange, autoComplete, children }) {
  return (
    <Input type={type} placeholder={placeholder} value={value} onChange={onChange} autoComplete={autoComplete}>
      {children}
    </Input>
  );
};

Form.Submit = function FormSubmit({ type, disabled, children }) {
  return (
    <Submit type={type} disabled={disabled}>
      {children}
    </Submit>
  );
};
