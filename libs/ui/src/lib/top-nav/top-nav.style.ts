import styled from 'styled-components';

export const TopNav = styled.nav`
  padding: 5px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: fit-content;
  margin: 0 auto;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
`;
