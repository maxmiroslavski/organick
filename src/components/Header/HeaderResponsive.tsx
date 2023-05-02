// React
import React, { useState } from 'react';

// Redux
import { useDispatch } from 'react-redux';
import { toggleCart } from '../../store/uiSlice';

// Packages
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Assets
import burgerMenu from '../../assets/svg/burger-menu-svgrepo-com.svg';
import closeIcon from '../../assets/svg/close-md-svgrepo-com.svg';

// Components
import { HeaderResponsiveStyled } from './HeaderResponsiveStyles';
import { HeaderLogo } from '../UI/HeaderLogo';

export const HeaderResponsive = () => {
	const [turnMenu, setTurnMenu] = useState(false);
	const dispatch = useDispatch();

	const cartClickHandler = () => {
		setTurnMenu(false);
		dispatch(toggleCart());
	};

	return (
		<HeaderResponsiveStyled>
			<AnimatePresence>
				<button
					onClick={() => setTurnMenu(!turnMenu)}
					className="burger-menu"
				>
					{!turnMenu && (
						<motion.img
							initial={{ rotate: 0, opacity: 0 }}
							animate={{ rotate: 180, opacity: 1 }}
							exit={{ rotate: 0, opacity: 0 }}
							transition={{ duration: 0.3 }}
							className="burger-menu__icon"
							src={burgerMenu}
							alt=""
						/>
					)}
					{turnMenu && (
						<motion.img
							initial={{ rotate: 0, opacity: 0 }}
							animate={{ rotate: 180, opacity: 1 }}
							exit={{ rotate: 0, opacity: 0 }}
							transition={{ duration: 0.3 }}
							className="burger-menu__icon"
							src={closeIcon}
							alt=""
						/>
					)}
				</button>
			</AnimatePresence>
			<Link to="/">
				<HeaderLogo />
			</Link>
			<AnimatePresence>
				{turnMenu && (
					<motion.div
						initial={{ x: 400 }}
						animate={{ x: 0 }}
						exit={{ x: 400 }}
						transition={{ duration: 0.2 }}
						className="menu"
					>
						<ul className="menu__list">
							<li className="list__item">
								<Link
									onClick={() => setTurnMenu(false)}
									className="item__link"
									to="/"
								>
									Home
								</Link>
							</li>
							<li className="list__item">
								<Link
									onClick={() => setTurnMenu(false)}
									className="item__link"
									to="/about"
								>
									About
								</Link>
							</li>
							<li className="list__item">
								<Link
									onClick={() => setTurnMenu(false)}
									className="item__link"
									to="/shop"
								>
									Shop
								</Link>
							</li>
							<li className="list__item">
								<Link
									onClick={() => setTurnMenu(false)}
									className="item__link"
									to="/news"
								>
									News
								</Link>
							</li>
							<li className="list__item">
								<Link
									onClick={() => setTurnMenu(false)}
									className="item__link"
									to="/contact"
								>
									Contact
								</Link>
							</li>
							<li
								onClick={cartClickHandler}
								className="list__item"
							>
								Cart
							</li>
						</ul>
					</motion.div>
				)}
			</AnimatePresence>
		</HeaderResponsiveStyled>
	);
};
