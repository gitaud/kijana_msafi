import React from 'react';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Slider from '../components/Slider';
import Form from '../components/Form'
import Footer from '../components/Footer';

const Home = () => {
	return (
		<div>
			<Announcement />
			<Navbar />
			<Slider />
			<Form />
			<Footer />
		</div>
	)
}

export default Home