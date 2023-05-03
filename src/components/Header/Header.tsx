import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderStyled } from './HeaderStyles';
import { HeaderResponsive } from './HeaderResponsive';
import { HeaderLogo } from '../UI/HeaderLogo';
import { Cart } from '../UI/Cart';

export const Header = () => {
	return (
		<>
			<HeaderResponsive />
			<HeaderStyled>
				<div className="menu">
					<Link to="/" className="menu__header-logo">
						<HeaderLogo />
					</Link>

					<nav className="menu__navbar">
						<ul className="navbar__list">
							<li className="list__item">
								<Link className="item__link" to="/">
									Home
								</Link>
							</li>
							<li className="list__item">
								<Link className="item__link" to="/about">
									About
								</Link>
							</li>
							<li className="list__item">
								<Link className="item__link" to="/shop">
									Shop
								</Link>
							</li>
							<li className="list__item">
								<Link className="item__link" to="/news">
									News
								</Link>
							</li>
							<li className="list__item">
								<Link className="item__link" to="/contact">
									Contact
								</Link>
							</li>
						</ul>
					</nav>
				</div>

				<div className="actions">
					<div className="actions__cart">
						<Cart />
					</div>
				</div>
			</HeaderStyled>
		</>
	);
};
