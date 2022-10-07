import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: var(--space-20);
  flex-wrap: wrap;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Input = styled.input`
  font-family: var(--font-body);
  max-width: 450px;
  width: 100%;
  border: 0;
  padding: 10px;
  height: 70px;
  box-sizing: border-box;
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 70px;
  background: #e50914;
  color: white;
  text-transform: uppercase;
  padding: 0 32px;
  font-size: var(--text-xl);
  border: 0;
  cursor: pointer;
  font-family: var(--font-body);
  img {
    margin-left: var(--space-10);
    filter: brightness(0) invert(1);
    width: 24px;
    @media (max-width: 1000px) {
      width: 16px;
    }
  }
  &:hover {
    background: #f40612;
  }
  @media (max-width: 1000px) {
    height: 50px;
    font-size: var(--text-md);
    margin-top: var(--space-20);
    font-weight: var(--font-bold);
  }
`;

export const Text = styled.p`
  font-family: var(--font-body);
  font-size: var(--text-lg);
  color: white;
  text-align: center;
  @media (max-width: 600px) {
    font-size: var(--text-md);
    line-height: 22px;
  }
`;
