import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	height: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 14px;
	font-weight: 500;
	max-width: 100vw;
	background-color: #ffffff;
	color: #000000;
`

const Announcement = () => {
	return (
		<Container>
			Request for the best catering services in the city!
		</Container>
	)
}

export default Announcement;