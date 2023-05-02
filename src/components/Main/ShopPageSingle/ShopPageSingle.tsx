import { BannerTopPage } from '../../UI/BannerTopPage';
import topBannerImage from '../../../assets/img/shopPageSingle/shopPageTopBanner.jpg';
import { ShopPageSingleProduct } from './ShopPageSingleProduct/ShopPageSingleProduct';
import { Newsletter } from '../../UI/Newsletter/Newsletter';
import { RelatedProducts } from './RelatedProducts/RelatedProducts';
import { motion } from 'framer-motion';

export const ShopPageSingle = () => {
	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			<ShopPageSingleProduct />
			<RelatedProducts />
			<Newsletter />
		</motion.div>
	);
};
