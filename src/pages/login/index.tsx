import React from 'react';
import {
  StyledGridDiv,
  StyledLogoDiv,
  StyledFormDiv,
  StyledInput,
  StyledLink,
  StyledButton,
  StyledText
} from './styles';

const index: React.FC = () => {
  return (
    <StyledGridDiv>
      <StyledLogoDiv>
        <img src="" alt="myCompany" />
        <h1>Faça o login</h1>
      </StyledLogoDiv>
      <StyledFormDiv>
        <StyledInput type="email" placeholder="E-mail" />
        <StyledInput type="password" placeholder="Password" />
        <StyledLink href="#">Recuperar password</StyledLink>
        <StyledButton>ENTRAR</StyledButton>
        <StyledText>
          Não está registado? <a href="#">Registar</a>
        </StyledText>
      </StyledFormDiv>
    </StyledGridDiv>
  );
};

export default index;
