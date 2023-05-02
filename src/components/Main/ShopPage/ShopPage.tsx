import React from 'react';
import { ShopPageBanner } from './ShopPageBanner/ShopPageBanner';
import { BannerTopPage } from '../../UI/BannerTopPage';
import shopTopImage from '../../../assets/img/shopPage/shopPageBanner.jpg';
import { Newsletter } from '../../UI/Newsletter/Newsletter';
import { Products } from './Products/Products';
import { motion } from 'framer-motion';

export const ShopPage = () => {
	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			<BannerTopPage background={shopTopImage} heading="Shop" />
			<Products />
			<Newsletter />
		</motion.div>
	);
};
