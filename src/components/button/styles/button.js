import styled from 'styled-components/macro';

export const Button = styled.button`
  padding: var(--space-10);
  text-align: center;
  min-width: 100px;
  color: #fff;
  background: #e50914;
  font-size: var(--text-md);
  font-weight: var(--font-medium);
  font-family: var(--font-body);
  border: 0;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  &.small {
    padding: var(--space-5);
  }
  &.large {
    padding: var(--space-15);
    font-weight: var(--font-bold);
  }
  &:disabled {
    opacity: 0.5;
  }
  &:hover {
    background: #f40612;
  }
`;
