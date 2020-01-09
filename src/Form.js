import styled from 'styled-components';

const Card = styled.div`
  box-sizing: border-box;
  max-width: 410px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Input = styled.input`
  padding: 1rem;
  border: 1px solid #CAD4ED;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  border-radius: 3px;
  outline: none;
`;

const Button = styled.button`
  background: linear-gradient(to bottom, #719ac8, #6b90bd);
  border-color: #719ac8;
  border-radius: 3px;
  padding: 1rem;
  color: white;
  font-weight: 700;
  width: 100%;
  margin-bottom: 1rem;
  font-size: 0.9rem;
`;

const Error = styled.div`
  background-color: red;
`;

export { Form, Input, Button, Card, Error };