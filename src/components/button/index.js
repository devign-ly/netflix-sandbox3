import React from 'react';
import { Link } from 'react-router-dom';
import * as Styles from './styles/button';

export default function Button({ element, size, type, disabled, to, children }) {
  return (
    <Styles.Button
      type={type}
      disabled={disabled}
      to={to}
      className={size === 'large' ? 'large' : null}
      as={element === 'link' ? Link : null}
    >
      {children}
    </Styles.Button>
  );
}
