import React from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Quotation from '../components/Quotation'
import FormComponent from '../components/Form';
import Banner from '../components/BannerImg';
import Team from '../components/Team';
import Footer from '../components/Footer';

const Home = () => {
	return (
		<div style={{maxWidth: "100vw"}}>
			<Navbar />
			<Slider />
			<Quotation />
			<FormComponent />
			<Banner />
			<Team />
			<Footer />
		</div>
	)
}

export default Home