import React from 'react';
import styled from 'styled-components';
import { AddIcCall } from '@mui/icons-material';

import { mobile } from "../responsive";

const Container = styled.div`
	height: 60px;
	max-width: 100vw;
	background-color: #2f2f2f;
	color: #f5fafd;
	${mobile({ height: "50px" })}
`

const Wrapper = styled.div`
	padding: 10px 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	${mobile({ padding: "10px 0px" })}
`

const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
`
const Center = styled.div`
	flex: 1;
	text-align: center;
`

const Logo = styled.h1`
	font-weight: bold;
	${mobile({ fontSize: "15px"})}
`

const Right = styled.div`
	flex: 1;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	${mobile({
		marginRight: "10px"
	})}
`

const MenuItem = styled.a`
	font-size: 14px;
	cursor: pointer;
	margin-left: 25px;
	text-decoration: none;
	color: #ffffff;
	${mobile({ fontSize: "12px", marginLeft: "10px" })}
`

const Image = styled.img`
	border-radius: 50%;
	font-size: 14px;
	height: 35px;
	${mobile({
		marginLeft: "15px"
	})}
`

const Navbar = () => {

	return (
		<Container id="navbar">
			<Wrapper>
				<Left>
					<Image src="https://res.cloudinary.com/dctw6ghne/image/upload/v1671541603/kijana_msafi_logo_m1rdia.jpg" />
				</Left>
				<Center>
					<Logo>KIJANA MSAFI CATERERS</Logo>
				</Center>
				<Right>
					<MenuItem href="#contactForm">CONTACT US</MenuItem>
					<MenuItem href="#contactForm">
						<AddIcCall />
					</MenuItem>
					
				</Right>
			</Wrapper>
		</Container>
	)
}

export default Navbar;