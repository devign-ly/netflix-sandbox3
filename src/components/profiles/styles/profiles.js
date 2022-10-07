import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 80%;
`;

export const Title = styled.h1`
  width: 100%;
  color: #fff;
  font-family: var(--font-title);
  font-size: var(--text-3xl);
  text-align: center;
  font-weight: var(--font-semibold);
`;

export const List = styled.ul`
  padding: 0;
  margin: var(--space-0);
  display: flex;
  flex-direction: row;
`;

export const Name = styled.p`
  color: #808080;
  text-overflow: ellipsis;
  font-size: var(--text-md);
  font-family: var(--font-body);
  &:hover {
    font-weight: var(--font-bold);
    color: #e5e5e5;
  }
`;

export const Picture = styled.img`
  width: 100%;
  max-width: 150px;
  height: auto;
  border: 3px solid black;
  cursor: pointer;
`;

export const Item = styled.li`
  max-height: 200px;
  max-width: 200px;
  list-style-type: none;
  text-align: center;
  margin-right: var(--space-30);

  &:hover > ${Picture} {
    border: 3px solid white;
  }

  &:hover ${Name} {
    font-weight: var(--font-bold);
    color: white;
  }

  &:last-of-type {
    margin-right: var(--space-0);
  }
`;
