import React from 'react';
import { FooterStyled } from './FooterStyles';
import organickLogo from '../../assets/svg/organick-logo.svg';

import instagram from '../../assets/svg/footer-instagram-icon.svg';
import facebook from '../../assets/svg/footer-facebook-icon.svg';
import twitter from '../../assets/svg/footer-twitter-icon.svg';
import pinterest from '../../assets/svg/footer-pinterest-icon.svg';
import { Link } from 'react-router-dom';

export const Footer = () => {
	return (
		<FooterStyled>
			<div className="left-block">
				<span className="left-block__heading">Contact Us</span>
				<ul className="left-block__list">
					<li className="list__item">
						<span className="item__contact">Email</span>
						<span className="item__info">needhelp@Organia.com</span>
					</li>
					<li className="list__item">
						<span className="item__contact">Phone</span>
						<span className="item__info">666 888 888</span>
					</li>
					<li className="list__item">
						<span className="item__contact">Address</span>
						<span className="item__info">
							88 Road, Borklyn Street, USA
						</span>
					</li>
				</ul>
			</div>

			<div className="center-block">
				<div className="center-block__heading">
					<img src={organickLogo} alt="" />
					<h2 className="heading__text">Organick</h2>
				</div>
				<p className="center-block__paragraph">
					Simply dummy text of the printing and typesetting industry.
					Lorem Ipsum simply dummy text of the printing
				</p>

				<div className="center-block__icons">
					<img className="icons__item" src={instagram} alt="" />
					<img className="icons__item" src={facebook} alt="" />
					<img className="icons__item" src={twitter} alt="" />
					<img className="icons__item" src={pinterest} alt="" />
				</div>
			</div>

			<div className="right-block">
				<span className="left-block__heading">Pages</span>
				<ul className="right-block__list">
					<li className="list__item--link">
						<Link to="/">Home</Link>
					</li>
					<li className="list__item--link">
						<Link to="/about">About</Link>
					</li>
					<li className="list__item--link">
						<Link to="/shop">Shop</Link>
					</li>
					<li className="list__item--link">
						<Link to="/news">News</Link>
					</li>
				</ul>
			</div>
		</FooterStyled>
	);
};
