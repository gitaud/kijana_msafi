import React, { useState } from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { publicRequest } from '../requestMethods';

import "./form.css";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: rgba(31, 31, 31, 0.8);
  padding: 25px;
  padding-bottom: 50px;
  min-height: 500px;
  max-width: 100vw;
  ${mobile({flexDirection: "column"})}
`;

const FormTitle = styled.h2`
  color: white;
  margin-top: 45px;
  font-size: 40px;
  text-align: center;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const FieldContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 65%;
  margin: 10px;
  ${mobile({
    width: "95%",
    flexDirection: "column",
    justifyContent: "left",
    alignItems: "left",
  })}
`

const Label = styled.label`
  color: #ffffff;
  flex: 0.7;
  line-height: 25px;
  font-size: 25px;
  text-align: left;

  ${mobile({
    width: "100%",
    margin: "10px 0 0 5px"
  })}
`

const Field = styled.input`
  flex: 2;
  font-size: 20px;
  margin-bottom: 15px;
  margin-top: 10px;
  line-height: 25px;
  outline: none;
  border: none;
  color: #ffffff !important;
  width: 65%;
  background-color: transparent !important;
  border-bottom: 2px solid white;

  ${mobile({
    width: "100%",
    margin: "10px 0 0 5px",
  })}
`;

const Button = styled.button`
	padding: 10px;
	font-size: 20px;
  border: 2px solid #ffffff;
	background-color: #ffffff;
	cursor: pointer;
  color: black;

  :hover {
    border: 2px solid #ffffff;
    background-color: transparent;
    color: white;
    transition: 0.3s;
  }

  ${mobile({
    marginTop: '15px'
  })}
`

const ErrorMessage = styled.p`
  line-height: 20px;
  color: rgba(255, 80, 80, 0.8);
  text-align: center;
  margin-top: 15px;
`

const SuccessMessage = styled.p`
  line-height: 20px;
  color: rgba(80, 255, 80, 0.8);
  text-align: center;
  margin-top: 15px;
`

const FormComponent = () => {
  const [ email, setEmail ] = useState("");
  const [ name, setName ] = useState("");
  const [ location, setLocation ] = useState("");
  const [ event, setEvent ] = useState("");
  const [ phone, setPhone ] = useState("");
  const [ date, setDate ] = useState("");
  const [ submitting, setSubmitting ] = useState(false);
  const [ error, setError ] = useState(false);
  const [ success, setSuccess ] = useState(false);

  const submitRequest = async (e) => {

    setSubmitting(true);
    setError(false);
    setSuccess(false);
    if (email === "" || name === "" || location === "" || event === "" || date === null ) {
      setError("Please fill in all fields")
    } else {
      try {
        await publicRequest.post("orders/", { name, email, location, event, date});
        setSuccess(true)
      } catch(err) {
        setError("Failed! Check your internet or contact us");
      }
    }
    setSubmitting(false)
  }

  return(
    <Container id="contactForm">
      <Form autoComplete='off'>
        <FormTitle>Book Our Services</FormTitle>
        <FieldContainer>
          <Label>Name: </Label>
          <Field type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required/>
        </FieldContainer>
        <FieldContainer>
          <Label>Email: </Label>
          <Field type="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} required/>
        </FieldContainer>
        <FieldContainer>
          <Label>Phone no: </Label>
          <Field type="text" value={phone} placeholder="0712 745 676" onChange={(e) => setPhone(e.target.value)} required/>
        </FieldContainer>
        <FieldContainer>
          <Label>Event: </Label>
          <Field type="text" value={event} placeholder="Wedding, Birthday, etc" onChange={(e) => setEvent(e.target.value)} required/>
        </FieldContainer>
        <FieldContainer>
          <Label>Your Location: </Label>
          <Field type="text" value={location} placeholder="Your Location" onChange={(e) => setLocation(e.target.value)} required/>
        </FieldContainer>
        <FieldContainer>
          <Label>Date: </Label>
          <Field type="date" value={date} onChange={(e) => setDate(e.target.value)} required/>
        </FieldContainer>
        <Button disabled={submitting} onClick={(e) => submitRequest(e)}>Book Now</Button>
        { error && <ErrorMessage> {error} </ErrorMessage> }
        { success && <SuccessMessage>Sent! Our agent will be in touch shortly</SuccessMessage>}
      </Form>
    </Container>  
  )
}

export default FormComponent;