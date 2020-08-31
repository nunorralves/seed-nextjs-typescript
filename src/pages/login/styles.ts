import styled from 'styled-components';

export const StyledGridDiv = styled.div`
  display: grid;
  height: 100vh;
  grid-column-gap: 0;
  grid-row-gap: 0;
  grid-template-areas:
    '. . . .'
    '. logoArea formArea .'
    '. . . .';
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 2fr 1fr;
  justify-content: center;
  align-items: center;
`;

export const StyledLogoDiv = styled.div`
  grid-area: logoArea;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h1 {
    font-size: 3rem;
    margin-top: 2rem;
    color: ${props => props.theme.colors.tertiary.regular};
  }
`;

export const StyledFormDiv = styled.div`
  grid-area: formArea;
  display: flex;
  height: 100%;
  background-color: ${props => props.theme.colors.background.regular};
  flex-direction: column;
  border-radius: 0.5rem;
  align-items: stretch;
  padding: 4rem;
`;

export const StyledInput = styled.input`
  height: 3rem;
  background-color: ${props => props.theme.colors.background.darker};
  border-width: 0;
  outline: none;
  border-radius: ${props => props.theme.borderRadius.sm};
  padding: 0 1rem;
  margin-top: 1rem;
  color: ${props => props.theme.colors.textPrimary.regular};

  & :focus {
    border: 1px solid ${props => props.theme.colors.tertiary.regular};
  }
`;

export const StyledLink = styled.a`
  text-decoration: none;
  margin-top: 1rem;
  color: ${props => props.theme.colors.tertiary.regular};
  text-align: right;
  /* font-weight: bold; */
  font-size: 0.9rem;

  &:hover {
    color: ${props => props.theme.colors.tertiary.hover};
  }
`;

export const StyledButton = styled.button`
  margin-top: 3rem;
  height: 3rem;
  border-radius: ${props => props.theme.borderRadius.sm};
  background-color: ${props => props.theme.colors.tertiary.regular};
  border: 0px;
  font-weight: bold;
  outline-style: none;

  &:hover,
  :focus {
    background-color: ${props => props.theme.colors.tertiary.hover};
  }
`;

export const StyledText = styled.p`
  margin-top: 2rem;
  font-size: 0.9rem;
  text-align: center;

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.tertiary.regular};
    font-size: 0.9rem;

    &:hover {
      color: ${props => props.theme.colors.tertiary.hover};
    }
  }
`;
