import { AboutUs } from './AboutUs/AboutUs';
import { WhyChoseUs } from './WhyChoseUs/WhyChoseUs';
import { Newsletter } from '../../UI/Newsletter/Newsletter';
import { Team } from './Team/Team';
import { BannerTopPage } from '../../UI/BannerTopPage';
import bannerImage from '../../../assets/img/AboutUsBannerImage.jpg';
import { motion } from 'framer-motion';

export const AboutPage = () => {
	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			<BannerTopPage background={bannerImage} heading="About Us" />
			<AboutUs />
			<WhyChoseUs />
			<Team />
			<Newsletter />
		</motion.div>
	);
};
