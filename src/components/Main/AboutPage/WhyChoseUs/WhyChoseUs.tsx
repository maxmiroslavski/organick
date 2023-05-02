import React from 'react';
import { WhyChoseUsStyled } from './WhyChoseUsStyles';
import { GreenHeading } from '../../../UI/GreenHeading';
import { SubText } from '../../../UI/SubText';
import greensImane from '../../../../assets/svg/about-us-page-greens.jpg';
import greenCircle from '../../../../assets/svg/green-circe-icon.svg';
import { WhyChoseUsItem } from './WhyChoseUsItem';
import { WhyChoseUsData } from './WhyChoseUsData';

export const WhyChoseUs = () => {
	return (
		<WhyChoseUsStyled>
			<div className="banner-section">
				<div className="description">
					<GreenHeading className="heading">
						Why Choose us?
					</GreenHeading>
					<SubText className="subheading">
						We do not buy from the open market & traders.
					</SubText>
					<p className="description__paragraph">
						Simply dummy text of the printing and typesetting
						industry. Lorem had ceased to been the industry's
						standard the 1500s, when an unknown
					</p>

					<ul className="description__list">
						<li className="list__item">
							<img
								className="item__icon"
								src={greenCircle}
								alt=""
							/>
							<span className="item__text">
								100% Natural Product
							</span>
						</li>
						<li className="list__item">
							<img
								className="item__icon"
								src={greenCircle}
								alt=""
							/>
							<span className="item__text">
								Increases resistance
							</span>
						</li>
					</ul>
				</div>
				<div className="greens-image">
					<img className="image" src={greensImane} alt="" />
				</div>
			</div>
			<div className="achivments">
				<ul className="achivments__list">
					{WhyChoseUsData.map((item, i) => (
						<WhyChoseUsItem
							key={i}
							icon={item.icon}
							title={item.title}
							text={item.text}
						/>
					))}
				</ul>
			</div>
		</WhyChoseUsStyled>
	);
};
