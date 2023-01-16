import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5fafd;
  color: #2f2f2f;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  height: auto;
  min-height: 400px;

  ${mobile({
    flexDirection: "column"
  })}
`

const Profile = styled.div`
  margin: 25px 45px;
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 65%;
  min-height: 350px;
  flex: 1;
  background-color: #f5fafd;
  border-radius: 15px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75); 
	box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);

  ${mobile({
    width: "80%",
    margin: "25px 15px"
  })}
`;

const Heading = styled.h2`
  width: 100%;
  text-align: center;
  margin-top: 10px;
  padding-top: 3px;
  font-size: 23px;
  line-height: 23px;
`

const Image = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
`

const Name = styled.h3`
  font-size: 18px;
  line-height: 20px;
  padding: 3px;
`
const Title = styled.h4`
  font-size: 15px;
  line-height: 20px;
  padding: 3px;
`
const Desc = styled.p`
  font-size: 16px;
  padding: 5px;
  width: 85%;
`

const Team = () => {
  return(
    <Container>
      <Heading>Our Team</Heading>
      <ProfileContainer>
        <Profile>
          <Image src="https://res.cloudinary.com/dctw6ghne/image/upload/v1671541603/wilson_muchiri_ajz4vu.jpg" />
          <Name>Wilson Muchiri Karagu</Name>
          <Title>Founder and CEO</Title>
          <Desc>
            I started this enterprise to provide my clients good services at a great price. I take pleasure in seeing how much Kijana Msafi has grown. Our customers and the great service we offer is the reason for this longevity. I remain grateful to our customers and staff. Let's keep working together.
          </Desc>
        </Profile>
        <Profile>
          <Image src="https://res.cloudinary.com/dctw6ghne/image/upload/v1671541605/evans_karuga_ygy4uw.jpg" />
          <Name>Evans Karuga</Name>
          <Title>Accounts & Management</Title>
          <Desc>I am very passionate about the hospitality and management sector. I strive to provide my clients with the best service possible by motivating my team to do their best work every day. I continually learn and improve our business to ensure consistent quality and service delivery. Happy clients make me work hard every day.</Desc>
        </Profile>
      </ProfileContainer>
    </Container>
  )
}

export default Team;