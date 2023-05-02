import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

import { motion, AnimatePresence } from 'framer-motion';

import icon from '../../assets/svg/ToTopIcon.svg';

const ScrollToTopButton = () => {
	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const handleScroll = () => {
		setScrollPosition(window.pageYOffset);
	};

	const handleClick = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<>
			<AnimatePresence>
				{scrollPosition > 100 && (
					<motion.div
						key="button"
						initial={{ x: 200 }}
						animate={{ x: 0 }}
						transition={{ duration: 0.5 }}
						exit={{ x: 200 }}
						style={{
							position: 'fixed',
							right: 30,
							bottom: 30,
							zIndex: 100,
						}}
					>
						<ButtonStyled onClick={handleClick}>
							<img src={icon} alt="" />
						</ButtonStyled>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

const ButtonStyled = styled.button`
	border: none;
	background: transparent;
	cursor: pointer;
	background: #bebebe;
	width: 70px;
	height: 70px;
	border-radius: 100px;
	transform: scale(1);
	transition: 0.15s;

	@media (max-width: 1440px) {
		width: 50px;
		height: 50px;
		opacity: 0.5;
	}

	:hover {
		transform: scale(1.1);
	}

	img {
		width: 80%;
	}
`;

export { ScrollToTopButton };
