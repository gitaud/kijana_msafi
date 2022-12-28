import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	height: 30px;
	background-color: teal;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 14px;
	font-weight: 500;
	max-width: 100vw;
`

const Announcement = () => {
	return (
		<Container>
			Request for our services here
		</Container>
	)
}

export default Announcement;