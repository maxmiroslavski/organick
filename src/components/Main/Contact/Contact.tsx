import React from 'react';
import { motion } from 'framer-motion';
import bannerImage from '../../../assets/img/contact/banngerImage.jpg';
import { BannerTopPage } from '../../UI/BannerTopPage';
import { Newsletter } from '../../UI/Newsletter/Newsletter';
import { ContactInfo } from './ContactInfo/ContactInfo';
import { Location } from './Location/Location';
import { Form } from './Form/Form';

export const Contact = () => {
	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			<BannerTopPage heading="Contact Us" background={bannerImage} />
			<ContactInfo />
			<Location />
			<Form />
			<Newsletter />
		</motion.div>
	);
};
