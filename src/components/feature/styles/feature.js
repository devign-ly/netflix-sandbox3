import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 8px solid #222;
  text-align: center;
  padding: 165px 40px;
`;

export const Title = styled.h1`
  color: white;
  max-width: 640px;
  font-family: var(--font-body);
  font-size: var(--text-3xl);
  font-weight: var(--font-semibold);
  margin: auto;
  @media (max-width: 600px) {
    font-size: var(--text-2xl);
  }
`;

export const SubTitle = styled.h2`
  color: white;
  font-family: var(--font-body);
  font-size: var(--text-xl);
  font-weight: var(--font-regular);
  margin: 16px auto;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;
