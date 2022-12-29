import React from 'react';
import styled from 'styled-components';
import { Facebook, Twitter, Instagram, Phone, Room, MailOutline } from '@mui/icons-material';
import { mobile } from "../responsive";

const Container = styled.div`
	display: flex;
	max-width: 100vw;
	background-color: #2f2f2f;
	color: #ffffff;
	${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 20px;
`
const Logo = styled.h1`
	${mobile({ textAlign: "center" })}
`;

const Desc = styled.p`
	margin: 20px 0px;
`;

const SocialContainer = styled.div`
	display: flex;
	flex-direction: row;
	${mobile({ justifyContent: "center" })}
`;

const SocialIcon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	border: 1px solid #7f7f7f;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 20px;

	& > a {
		text-decoration: none;
		display: flex;
		color: #ffffff;
		align-items: center;
		justify-content: center;
	}
`;

const Center = styled.div`
	flex: 1;
	padding: 20px;
	${mobile({ display: "none" })}
`;

const Title = styled.h3`
	margin-bottom: 30px;
`;

const List = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	flex-wrap: wrap
`;

const ListItem = styled.li`
	width: 50%;
	margin-bottom: 10px;

	& > a {
		text-decoration: none;
		color: #ffffff;
	}
`;

const Right = styled.div`
	flex: 1;
	padding: 20px;
	${mobile({ textAlign: "center" })}
`;

const ContactItem = styled.div`
	margin-bottom: 20px;
	display: flex;
	align-items: center;
	${mobile({ justifyContent: "center" })}
`;

const Payment = styled.img`
	width: 60%;
`;

const Footer = () => {
	return (
		<Container>
			<Left>
				<Logo>KIJANA MSAFI</Logo>
				<Desc>Kijana Msafi has existed for over 40 years. Our vast experience in catering and hotel management services ensure you experience top-tier services at your event. Contact us for an appointment </Desc>
				<SocialContainer>
					<SocialIcon color="3B5999">
						<a href="https://www.facebook.com/KijanaMsafiRestaurants">
							<Facebook />
						</a>
					</SocialIcon>
					<SocialIcon color="E4405F">
						<a href="https://instagram.com/kijanamsafihotel?igshid=YmMyMTA2M2Y=">
							<Instagram />
						</a>
					</SocialIcon>
					<SocialIcon color="55ACEE">
						<a href="https://twitter.com/search?q=kijana%20msafi%20hotel&t=yZw-724oV80wFPkr2qSwCw&s=09">
							<Twitter />
						</a>
					</SocialIcon>
				</SocialContainer>
			</Left>

			<Center>
				<Title>Useful Links</Title>
				<List>
					<ListItem><a href="#navbar">Home</a></ListItem>
					<ListItem><a href="#contactForm">Contact Us</a></ListItem>
				</List>
				<Payment src="https://recruit.jobwebkenya.com/wp-content/uploads/2021/10/payment.jpg" />
			</Center>
			<Right>

				<Title>Contact</Title>
				<ContactItem><Room style={{marginRight: "10px"}}/> Nairobi</ContactItem>
				<ContactItem><Phone style={{marginRight: "10px"}}/>+254 743 404 997</ContactItem>
				<ContactItem><MailOutline style={{marginRight: "10px"}}/> kijanamsafi@gmail.com</ContactItem>
				
			</Right>
		</Container>
	)
}

export default Footer;