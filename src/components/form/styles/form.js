import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 660px;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  width: 100%;
  margin: auto;
  max-width: 450px;
  padding: 60px 68px 40px;
  margin-bottom: var(--space-100);
`;

export const Error = styled.div`
  background: #e87c03;
  border-radius: 4px;
  font-size: 14px;
  margin: 0 0 16px;
  color: white;
  padding: 15px 20px;
`;

export const Base = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
`;

export const Title = styled.h1`
  color: #fff;
  font-family: var(--font-title);
  font-size: var(--text-2xl);
  font-weight: var(--font-semibold);
  margin-bottom: 28px;
`;

export const Text = styled.p`
  color: #737373;
  font-size: var(--text-md);
  font-weight: var(--font-medium);
  font-family: var(--font-body);
`;

export const TextSmall = styled.p`
  margin-top: var(--space-10);
  font-size: var(--text-sm);
  line-height: normal;
  color: #8c8c8c;
  font-family: var(--font-body);
`;

export const Link = styled(ReactRouterLink)`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Input = styled.input`
  background: #333;
  border-radius: 4px;
  border: 0;
  color: #fff;
  height: 50px;
  line-height: 50px;
  padding: 5px 20px;
  margin-bottom: var(--space-20);
  font-family: var(--font-body);
  &:last-of-type {
    margin-bottom: var(--space-40);
  }
`;
