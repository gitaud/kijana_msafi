import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #1a1a1a;
  height: 500px;
  width: 100%;
  ${mobile({flexDirection: "column"})}
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  color: #ffffff;
`

const Field = styled.input`
  margin-bottom: 15px;
  margin-top: 10px;
  line-height: 25px;
  outline: none;
  border: none;
  color: #ffffff;
  background-color: #000000;
  border-bottom: 2px solid white;
`;

const Button = styled.button`
	padding: 10px;
	font-size: 20px;
  border: 2px solid #ffffff;
	background-color: transparent;
	cursor: pointer;
`

const FormComponent = () => {
  return(
    <Container>
      <Form>
        <Field type="text" placeholder="Your Name"/>
        <Field type="email" placeholder="Email"/>
        <Field type="text" placeholder="Your Location"/>
        <Field type="date" />
        <Button />
      </Form>
    </Container>  
  )
}

export default FormComponent;