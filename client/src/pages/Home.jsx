import React from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Form from '../components/Form';
import Team from '../components/Team';
import Footer from '../components/Footer';

const Home = () => {
	return (
		<div style={{maxWidth: "100vw"}}>
			<Navbar />
			<Slider />
			<Form />
			<Team />
			<Footer />
		</div>
	)
}

export default Home