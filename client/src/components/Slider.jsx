import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-material-ui-carousel';

import { sliderItems } from '../data';
import { mobile } from "../responsive";


const Slide = styled.div`
	display: flex;
	align-items: center;
	width: 100vw;
	height: 500px;
	background-color: #${props => props.bg};
`
const ImgContainer = styled.div`
	flex: 1;
	height: 95%;
	display: flex;
	justify-content: center;
	align-items: center;

	${mobile({
		display: "none"
	})}

`
const InfoContainer = styled.div`
	flex: 1;
	width: 100%;
	height: 100%;
	display: flex;
	color: #000000;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	@media only screen and (max-width: 450px) {
		background-color: none;
		background-image: url(${props => props.img});
		background-size: cover;
	}
`

const Image = styled.img`
	height: 100%;
`
const Title = styled.h1`
	font-size: 70px;

	${mobile({
		color: "#ffffff",
		textAlign: "center",
		fontSize: "45px"
	})}
`

const Desc = styled.p `
	margin: 50px 10px;
	font-size: 20px;
	font-weight: 500;
	letter-spacing: 3px;

	${mobile({
		textAlign: "center",
		color: "#ffffff",
		margin: "30px 0px",
		letterSpacing: "2px"
	})}
`


const Button = styled.button`
	padding: 10px;
	font-size: 20px;
	background-color: transparent;
	cursor: pointer;

	${mobile({
		backgroundColor: "#ffffff",
		color: "#000000",
	})}
`

const Slider = () => {
	return (
		<Carousel
			stopAutoPlayOnHover={false}
			interval={5000}
			duration={700}
			navButtonsAlwaysVisible={true}
			indicatorButtonProps={
				{'position': 'absolute','bottom': '10px', 'margin': '0px'}

			}
		>
			{sliderItems.map(item => (
				<Slide bg={item.bg} key={item.id}>
					<ImgContainer>
						<Image src={item.img}/>
					</ImgContainer>
					<InfoContainer img={item.img}>
						<Title>{item.title}</Title>
						<Desc>{item.desc}</Desc>
						<Button onClick={() => window.location="#contactForm"}>Contact Us</Button>
					</InfoContainer>
				</Slide>
			))}
		</Carousel>
	)
}

export default Slider;