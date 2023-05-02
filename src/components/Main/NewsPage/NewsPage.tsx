import React from 'react';
import { BannerTopPage } from '../../UI/BannerTopPage';
import newsBackground from '../../../assets/img/NewsBanner.jpg';
import { Newsletter } from '../../UI/Newsletter/Newsletter';
import { AllNews } from './AllNews/AllNews';
import { motion } from 'framer-motion';

export const NewsPage = () => {
	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			<BannerTopPage heading="Recent News" background={newsBackground} />
			<AllNews />
			<Newsletter />
		</motion.div>
	);
};
