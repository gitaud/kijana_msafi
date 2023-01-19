import React, { useState } from 'react';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';
import { mobile } from '../responsive';

import "./form.css";

const Container = styled.div`
  background-color: #f5fafd;
  color: #13131a;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  padding: 35px 15px;
  min-height: 600px;

  ${mobile({
    padding: "25px 5px",
    minHeight: "850px"
  })}
`

const Heading = styled.h2`
  text-align: center;
  padding: 10px 5px;
`

const Paragraph = styled.p`
  width: 100%;
  text-align: center;
  margin: 5px;
`

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  transition: all 1.5s ease;
`;

const ItemLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  min-height: 60px;

  ${mobile({
    flexDirection: "column",
  })}
`

const SubItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-width: 25%;
`;


const Item = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  min-height: 75px;
  justify-content: center;
  align-items: center;
  width: 100%;
  
  ${mobile({
    justifyContent: "flex-start",
  })}
  `;

const Label = styled.label`
  padding: 1px 5px 1px 10px;;
  flex: 1;
`
  
  const FormComponent = () => {

  const [ slideIndex, setSlideIndex ] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3);
    } else {
      setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0);
    }
  } 

  return(
    <Container>
      <>
        <Heading>Agreement Form</Heading>
        <Paragraph>The agreement made on {new Date().toDateString()}</Paragraph>
        <Paragraph>Between Kijana Msafi Ltd of P.O. BOX 12454-00400 Nairobi, email: kijanamsafi@yahoo.com and </Paragraph>
        <Formik
          initialValues={{
            customerName:  "",
            idNumber:  "",
            mobileNo:  "",
            email:  "",
            boxNo: "",
            locationResidential:  "",
            office:  "",
            dateOfFunction:  "",
            time: "",
            venue: "",
            noOfPeopleAttending: "",
            kienyejiMukimo: "",
            pilau: "",
            chapati: "",
            whiteRice: "",
            mixedVegetables: "",
            salad: "",
            njahiBlackBeans: "",
            steamedCabbages: "",
            beefStew: "",
            sodaQty: "",
            chickenNo: "",
            fruitsNoOfPlates: "",
            roastedRibs: "",
            mineralWaterNoOfBottles: "",
            friedPotatoes: "",
            ugaliNoOfPlates: "",
            transportInKms: "",
            commitmentFeePaymentDate: "",
            depositFeePaymentDate: "",
            balancePaymentDate: "",
            termsAgreed: "",
          }}
          onSubmit={(values) => {
            // do something
            console.log(values);
          }}

        >
          <Form className="form" >
            <Wrapper slideIndex={slideIndex}>
              <div className="sub-form" style={ slideIndex !== 0 ? {display: "none"} : {}}>
                <Paragraph><b>A. Contact Information </b></Paragraph>
                <ItemLine>
                  <Item>
                    <Label>Mr/Mrs/Ms:</Label>
                    <Field className="field" placeholder="e.g. Jane Doe" name="customerName" type="text" required />
                  </Item>
                  <Item>
                    <Label>ID Number:</Label>
                    <Field className="field" placeholder="e.g. 12345678" name="idNumber" type="text" required />
                  </Item>
                </ItemLine>
                <ItemLine>
                  <Item>
                    <Label>Mobile No: </Label>
                    <Field className="field" placeholder="e.g. 0712 345 678" name="mobileNo" type="text" required/>
                  </Item>
                  <Item>
                    <Label>Email: </Label>
                    <Field className="field" placeholder="example@email.com" name="email" type="email" required />
                  </Item>
                </ItemLine>
                <ItemLine>
                  <Item>
                    <Label>Location-Residential</Label>
                    <Field className="field" placeholder="e.g. Fulani Estate, Kahawa Sukari" name="locationResidential" type="text" required/>
                  </Item>
                  <Item>
                    <Label>Office</Label>
                    <Field className="field" placeholder="e.g. Moi Av, Nairobi CBD" name="office" type="text" required/>
                  </Item>
                </ItemLine>
                <ItemLine>
                  <Item>
                    <Label>Date of Function</Label>
                    <Field className="field" name="dateOfFunction" type="date" min={new Date()} required />
                  </Item>
                  <Item>
                    <Label>Time</Label>
                    <Field className="field" name="time" type="time" min="10:00" step={900} required/>
                  </Item>
                </ItemLine>
                <ItemLine>
                  <Item>
                    <Label>Venue</Label>
                    <Field className="field" placeholder="e.g. Spring Fields, Komarock" name="venue" type="text" required/>
                  </Item>
                  <Item>
                    <Label>No of People</Label>
                    <Field className="field" name="noOfPeopleAttending" min="0" max="10000" placeholder="eg 150" type="number" required />
                  </Item>
                </ItemLine>
                <ItemLine style={{flexDirection: "row", justifyContent: "center"}}>
                  <Item style={{justifyContent: "center"}}>
                    <button className="bttn" disabled={true} type="button">Previous</button>
                  </Item>
                  <Item style={{justifyContent: "center"}}>
                    <button className="bttn" onClick={() => handleClick("right")} type="button">Next</button>
                  </Item>
                </ItemLine>
              </div>
              <div className="sub-form" style={ slideIndex !== 1 ? {display: "none"} : {}}>
                <Paragraph> <b>B. Main Menu</b></Paragraph>
                <ItemLine>
                  <Item className="check colored-mobile colored">
                    <Label>1. Kienyeji (Mukimo)</Label>
                    <Field className="checkbox" type="checkbox" name="kienyejiMukimo" required/>
                  </Item>
                  <Item className="check">
                    <Label>2. Pilau</Label>
                    <Field className="checkbox" type="checkbox" name="pilau" required/>
                  </Item>
                </ItemLine>
                <ItemLine>
                  <Item className="check colored-mobile">
                    <Label>3. Chapati</Label>
                    <Field className="checkbox" type="checkbox" name="chapati" required/>
                  </Item>
                  <Item className="check colored">
                    <Label>4. White Rice</Label>
                    <Field className="checkbox" type="checkbox" name="whiteRice" required/>
                  </Item>
                </ItemLine>
                <ItemLine>
                  <Item className="check colored colored-mobile">
                    <Label>5. Mixed Vegetables</Label>
                    <Field className="checkbox" type="checkbox" name="mixedVegetables" required/>
                  </Item>
                  <Item className="check">
                    <Label>6. Salad </Label>
                    <Field className="checkbox" type="checkbox" name="salad" required/>
                  </Item>
                </ItemLine>
                <ItemLine>
                  <Item className="check colored-mobile" >
                    <Label>7. Njahi (Black Beans)</Label>
                    <Field className="checkbox" type="checkbox" name="njahiBlackBeans" required/>
                  </Item>
                  <Item className="check colored">
                    <Label>8. Steamed Cabbages</Label>
                    <Field className="checkbox" type="checkbox" name="steamedCabbages" required/>
                  </Item>
                </ItemLine>
                <ItemLine>
                  <Item className="check colored colored-mobile">
                    <Label>9. Beef Stew</Label> 
                    <Field className="checkbox" type="checkbox" name="beefStew" required/>
                  </Item>
                  <Item />
                </ItemLine>
                <ItemLine style={{flexDirection: "row", justifyContent: "center"}}>
                  <Item style={{justifyContent: "center"}}>
                    <button className="bttn" onClick={() => handleClick("left")} type="button" >Previous</button>
                  </Item>
                  <Item style={{justifyContent: "center"}}>
                    <button className="bttn" onClick={() => handleClick("right")} type="button">Next</button>
                  </Item>
                </ItemLine>
              </div>
              <div className="sub-form" style={ slideIndex !== 2 ? {display: "none"} : {}}>
                <Paragraph><b>C. OTHER REQUIREMENTS</b></Paragraph>
                  <ItemLine>
                    <Item>
                      <Label>(i) Soda (Qty)</Label>
                      <Field className="field" type="number" name="sodaQty" min="0" max="10000" required/>
                      <Label>Total</Label>
                      <span className="total">xx</span>
                    </Item>
                    <Item>
                      <Label>(ii) Chicken (qty)</Label>
                      <Field className="field" type="number" name="chickenNo" min="0" max="10000" required/>
                      <Label>Total</Label>
                      <span className="total">xx</span>
                    </Item>
                  </ItemLine>
                  <ItemLine>
                    <Item>
                      <Label>(iii) Fruits No of Plates</Label>
                      <Field className="field" type="number" name="fruitsNoOfPlates" min="0" max="10000" required/>
                      <Label>Total</Label>
                      <span className="total">xx</span>
                    </Item>
                    <Item>
                      <Label>(iv) Roasted Ribs</Label>
                      <Field className="field" type="number" name="roastedRibs" min="0" max="10000" required/>
                      <Label>Total</Label>
                      <span className="total">xx</span>
                    </Item>
                  </ItemLine>
                  <ItemLine>
                    <Item>
                      <Label>(v) Mineral Water (no of bottles)</Label>
                      <Field className="field" type="number" name="mineralWaterNoOfBottles" min="0" max="10000" required/>
                      <Label>Total</Label>
                      <span className="total">xx</span>
                    </Item>
                    <Item>
                      <Label>(vi) Fried Potatoes</Label>
                      <Field className="field" type="number" name="friedPotatoes" min="0" max="10000" required/>
                      <Label>Total</Label>
                      <span className="total">xx</span>
                    </Item>
                  </ItemLine>
                  <ItemLine>
                    <Item>
                      <Label>(vii) Ugali (No of Plates)</Label>
                      <Field className="field" type="number" name="ugaliNoOfPlates" min="0" max="10000" required/>
                      <Label>Total</Label>
                      <span className="total">xx</span>
                    </Item>
                    <Item></Item>
                  </ItemLine>
                  <ItemLine>
                    <Item>
                      <Label>Distance in km </Label>
                      <Field className="field" style={{width: "80%"}} type="number" name="transportInKm" min="0" max="10000" required />
                    </Item>
                    <Item>
                      <span> Amount: XX</span>
                    </Item>
                  </ItemLine>
                <ItemLine style={{flexDirection: "row", justifyContent: "center"}}>
                  <Item style={{justifyContent: "center"}}>
                    <button className="bttn" onClick={() => handleClick("left")} type="button" >Previous</button>
                  </Item>
                  <Item style={{justifyContent: "center"}}>
                    <button className="bttn" onClick={() => handleClick("right")} type="button">Next</button>
                  </Item>
                </ItemLine>
              </div>
              <div className="sub-form" style={slideIndex !== 3 ? { display: "none"} : {}}>
                <Paragraph><b>D. PAYMENT DETAILS</b></Paragraph>
                <table>
                  <thead>
                    <tr className="t-border">
                      <th className="row-name t-border-bottom">PAYMENT ANALYSIS</th>
                      <th className="t-border-bottom">KSH</th>
                      <th className="t-border-bottom ">CTS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="row-name">TOTAL CHARGES</td>
                      <td className="align-center">xx</td>
                      <td className="align-center">xx</td>
                    </tr>
                    <tr>
                      <td className="row-name">COMMITMENT FEE (BOOKING FEES)</td>
                      <td className="align-center">xx</td>
                      <td className="align-center">xx</td>
                    </tr>
                    <tr>
                      <td className="row-name">DEPOSIT PAID</td>
                      <td className="align-center">xx</td>
                      <td className="align-center">xx</td>
                    </tr>
                    <tr>
                      <td className="row-name t-border-bottom">OTHER CHARGES</td>
                      <td className="align-center t-border-bottom">xx</td>
                      <td className="align-center t-border-bottom">xx</td>
                    </tr>
                    <tr>
                      <td className="row-name">BALANCE</td>
                      <td className="align-center">xx</td>
                      <td className="align-center">xx</td>
                    </tr>
                  </tbody>

                </table>
                <ItemLine></ItemLine>
                <Paragraph><b>E. DATE OF PAYMENT </b></Paragraph>
                <ItemLine>
                  <Item>
                    <Label>1. Commitment Fee: </Label>
                    <Field className="field" type="date" name="commitmentFeePaymentDate" required/>
                  </Item>
                  <Item>
                    <Label>2. Deposit Fee: </Label>
                    <Field className="field" type="date" name="depositFeePaymentDate" required />
                  </Item>
                </ItemLine>
                <ItemLine>
                  <Item>
                    <Label>3. Date of Payment of balance: </Label>
                    <Field className="field" type="date" name="balancePaymentDate" required />
                  </Item>
                  <Item></Item>
                </ItemLine>
                <ItemLine style={{justifyContent: "center", width: "60%", alignItems: "center"}}>
                  <Label style={{flex: 1}}>I have agreed to the terms of agreement stipulated in the quotation above</Label>
                  <Field style={{flex: 1}} type="checkbox" name="termsAgreed" required />
                </ItemLine>
                <ItemLine style={{flexDirection: "row", justifyContent: "center"}}>
                  <Item style={{justifyContent: "center"}}>
                    <button className="bttn" onClick={() => handleClick("left")} type="button" >Previous</button>
                  </Item>
                  <Item style={{justifyContent: "center"}}>
                    <button className="bttn" type="submit">Submit</button>
                  </Item>
                </ItemLine>
              </div>
            </Wrapper>
          </Form>
        </Formik>
      </>
    </Container>
  )
}

export default FormComponent;