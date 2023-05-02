import React from 'react';
import { TopBanner } from './TopBanner/TopBanner';
import { SpecialOffers } from './SpecialOffers/SpecialOffers';
import { AboutUs } from './AboutUs/AboutUs';
import { Categories } from './Categories/Categories';
import { Testimonial } from './Testimonial/Testimonial';
import { Offer } from './Offer/Offer';
import { EcoFriendly } from './EcoFriendly/EcoFriendly';
import { OrganicFood } from './OrganicFood/OrganicFood';
import { News } from './News/News';
import { Newsletter } from '../../UI/Newsletter/Newsletter';
import { motion } from 'framer-motion';

export const Homepage = () => {
	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			<TopBanner />
			<SpecialOffers />
			<AboutUs />
			<Categories />
			<Testimonial />
			<Offer />
			<EcoFriendly />
			<OrganicFood />
			<News />
			<Newsletter />
		</motion.div>
	);
};
