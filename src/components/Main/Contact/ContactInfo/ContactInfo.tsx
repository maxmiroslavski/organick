// React
import React from 'react';

// Assets
import bananaImage from '../../../../assets/img/contact/contactBananaImage.jpg';
import emailIcon from '../../../../assets/svg/contactPage/contactMessageIcon.svg';
import phoneIcon from '../../../../assets/svg/contactPage/contactPhoneIcon.svg';
import instagram from '../../../../assets/svg/contactPage/contactInstagram.svg';
import facebook from '../../../../assets/svg/contactPage/contactFacebook.svg';
import tweeter from '../../../../assets/svg/contactPage/contactTweeter.svg';
import pinterest from '../../../../assets/svg/contactPage/contactPinterest.svg';

// Components
import { ContactInfoStyled } from './ContactInfoStyles';
import { SubText } from '../../../UI/SubText';
import { ParagraphText } from '../../../UI/ParagraphText';

export const ContactInfo = () => {
	return (
		<ContactInfoStyled>
			<div className="banner-image">
				<img className="banner-image__inner" src={bananaImage} alt="" />
			</div>
			<div className="description">
				<SubText>
					We'd love to talk about how we can work together.
				</SubText>
				<ParagraphText className="description__paragraph">
					Simply dummy text of the printing and typesetting industry.
					Lorem had ceased to been the industry's standard dummy text
					ever since the 1500s, when an unknown printer took a galley.
				</ParagraphText>
				<ul className="description__list">
					<li className="list__item">
						<img className="item__icon" src={emailIcon} alt="" />
						<div className="item__info">
							<span className="info__name">Email</span>
							<span className="info__data">
								support@organic.com
							</span>
						</div>
					</li>
					<li className="list__item">
						<img className="item__icon" src={phoneIcon} alt="" />
						<div className="item__info">
							<span className="info__name">Contact Us</span>
							<span className="info__data">+01 123 456 789</span>
						</div>
					</li>
				</ul>
				<div className="description__social-media">
					<img src={instagram} alt="" />
					<img src={facebook} alt="" />
					<img src={tweeter} alt="" />
					<img src={pinterest} alt="" />
				</div>
			</div>
		</ContactInfoStyled>
	);
};
