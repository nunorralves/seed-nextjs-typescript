import React from 'react';
import { Container, Form } from './styles';

const index: React.FC = () => {
  return (
    <Container>
      <Form>
        <h1>Login</h1>
        <input type="text" placeholder="Nome" />
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </Form>
    </Container>
  );
};

export default index;
