import React from 'react';
import { Homepage } from './Homepage/Homepage';
import { Routes, Route } from 'react-router-dom';
import { AboutPage } from './AboutPage/AboutPage';
import { ShopPage } from './ShopPage/ShopPage';
import { ShopPageSingle } from './ShopPageSingle/ShopPageSingle';
import { NewsPage } from './NewsPage/NewsPage';
import ScrollToTop from '../UI/ScrollToTop';
import { Contact } from './Contact/Contact';
import { NewsPageSingle } from './NewsPageSingle/NewsPageSingle';
import { Cart } from '../Cart/Cart';
import { useSelector } from 'react-redux';
import { ScrollToTopButton } from '../UI/ScrollToTopBtn';
import { motion } from 'framer-motion';

export const Main = () => {
	const isShown = useSelector(
		(state: { ui: { isShown: boolean } }) => state.ui.isShown
	);
	return (
		<main>
			<ScrollToTop />
			<ScrollToTopButton />
			{isShown && <Cart />}
			<Routes>
				<Route path="/organick" element={<Homepage />} />
				<Route path="about" element={<AboutPage />} />
				<Route path="shop" element={<ShopPage />} />
				<Route path="news" element={<NewsPage />} />
				<Route path="contact" element={<Contact />} />
				<Route path="shop/:name" element={<ShopPageSingle />} />
				<Route path="news/:name" element={<NewsPageSingle />} />
			</Routes>
		</main>
	);
};
