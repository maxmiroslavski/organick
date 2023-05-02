import React from 'react';
import { PostNews } from './PostNews/PostNews';
import { Newsletter } from '../../UI/Newsletter/Newsletter';
import { AdditionalInfo } from './AdditionalInfo/AdditionalInfo';
import { motion } from 'framer-motion';

export const NewsPageSingle = () => {
	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			<PostNews />
			<AdditionalInfo />
			<Newsletter />
		</motion.div>
	);
};
