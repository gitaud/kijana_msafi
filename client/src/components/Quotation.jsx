import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  background-color: #2f2f2f;
  color: #f5fafd;
  padding: 35px 15px;
`;

const Heading = styled.h2`
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 15px 0px 15px 0px;
  border-bottom: 0.5px solid #f5fafd;
  width: 100%;

  ${mobile({
    flexDirection: "column"
  })}
`;

const InnerHeading = styled.h3`
  padding-top: 15px;
`;

const ItemBoxContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const ItemBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  ${mobile({
    flexDirection: "column",
    width: "90%",
    marginLeft: "15px"
  })}
`;

const ItemList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`;

const Item = styled.p`
  flex: 1;
  text-align: left;
  margin-top: 5px;
  width: 100%;
  line-height: 25px;
`;

const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const Footer = styled.p`
  margin-top: 25px;
  text-align: center;
`;

const Quotation = () => {
  return(
    <Container>
      <Heading>
        Quotation
      </Heading>
      <InnerHeading>A. MAIN MENU</InnerHeading>
      <ItemContainer>
        <ItemBoxContainer>
          <ItemBox>
            <Item>1. Kienyeji (Mukimo) </Item>
            <Item>2. Pilau </Item>
            <Item>3. White Rice </Item>
            <Item>4. Njahi (Black Beans) </Item>
            <Item>5. Chapati (Ration: 1:4) </Item>
            <Item>6. Salad </Item>
            <Item>7. Mixed vegetables: </Item>
            <ItemList>
              <Item>(i). French Beans </Item>
              <Item>(ii). Broccoli </Item>
            </ItemList>
            <ItemList>
              <Item>(iii). Pumpkin </Item>
              <Item>(iv). Corn flower </Item>
            </ItemList>
            <ItemList>
              <Item>(v). Peas </Item>
              <Item>(vi). Carrots etc. </Item>
            </ItemList>
            <Item>8. Steamed Cabbages </Item>
            <Item>9. Beef Stew </Item>
          </ItemBox>
        </ItemBoxContainer>
        <ItemBoxContainer>
          <ItemBox>
            <ItemList>
              <Item><b>Quantity</b></Item>
              <Item><b>Price per person</b> </Item>
            </ItemList>
            <ItemList>
              <Item>1000 people and over </Item>
              <Item>Ksh XX per person</Item>
            </ItemList>
            <ItemList>
              <Item>Between 801 and 1000 people </Item>
              <Item>Ksh XX per person</Item>
            </ItemList>
            <ItemList>
              <Item>Between 401 and 900 people </Item>
              <Item>Ksh XX per person</Item>
            </ItemList>
            <ItemList>
              <Item>Between 251 and 400 people </Item>
              <Item>Ksh XX per person</Item>
            </ItemList>
            <ItemList>
              <Item>Between 101 and 250 people </Item>
              <Item>Ksh XX per person</Item>
            </ItemList>
            <ItemList>
              <Item>Between 50 and 100 people </Item>
              <Item>Ksh XX per person</Item>
            </ItemList>
            <ItemList>
              <Item>Below 50 people</Item>
              <Item>Ksh XX per person</Item>
            </ItemList>
          </ItemBox>
        </ItemBoxContainer>
      </ItemContainer>
      <InnerHeading>B. OTHERS</InnerHeading>
      <ItemContainer>
        <ItemBoxContainer>
          <ItemBox>
            <ItemList>
              <Item>1. Sodas</Item>
              <Item>@Ksh 50 per bottle</Item>
            </ItemList>
            <ItemList>
              <Item>2. Fruits</Item>
              <Item>@Ksh xx per plate</Item>
            </ItemList>
            <ItemList>
              <Item>3. Grilled Meat (Nyama Choma) </Item>
              <Item>@Ksh xx per kg (Ration: 1:4, 1:8, 1:10)</Item>
            </ItemList>
            <ItemList>
              <Item>4. Water </Item>
              <Item>@Ksh xx per bottle</Item>
            </ItemList>
            <ItemList>
              <Item>5. Kuku (chicken)</Item>
              <Item>@Ksh xx per chicken (Ration: 1:4, 1:8, 1:10)</Item>
            </ItemList>
          </ItemBox>
        </ItemBoxContainer>
      </ItemContainer>
      <InnerHeading>C: TRANSPORT</InnerHeading>
      <ItemContainer>
        <ItemBoxContainer>
          <ItemBox>
            <Item>We charge depending on the distance to the venue </Item>
            <Item>The agreed fees is Ksh xx per km</Item>
          </ItemBox>
        </ItemBoxContainer>
      </ItemContainer>
      <InnerHeading>D. CONDITIONS</InnerHeading>
      <ItemContainer style={{borderBottom: "none"}}>
        <ItemBoxContainer>
          <ItemBox>
            <Item>(i). After negotiation, one has to pay a commitment fee of not less than Ksh 5,000 to book our services for the particular date</Item>
            <Item>(ii). A deposit of 75% of the total amount must be paid at least two weeks before the event's dte</Item>
            <Item>(iii). The remaining balance must be paid on the date of the function, or any other agreed date</Item>
            <Item>(iv) We provide services for a duration of 3 hours, and charge Ksh 500 for any extra hour thereafter </Item>
            <InnerHeading>NB:</InnerHeading> 
            <Item>(a) We provide: </Item>
            <ItemList>
              <Item>(i) Catering Utencils</Item>
              <Item>(ii) Qualified servicemen and ladies </Item>
            </ItemList>
            <Item>(b) If, for whatever reason, one cancels the agreement, 50% of the commitment fee will not be refunded</Item>
            <Item>(c) If, for whatever reason, one cancels the agreement and 75% of the amount has been paid, 10% of the deposit will not be refunded</Item>
            <FooterContainer>
              <Footer>
                Quality and Quantity is our motto! Thank you in advance! 
              </Footer>
            </FooterContainer>
          </ItemBox>
        </ItemBoxContainer>
      </ItemContainer>
    </Container>
  )
}

export default Quotation;