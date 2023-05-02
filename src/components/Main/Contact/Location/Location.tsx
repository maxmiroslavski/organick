import React from 'react';
import locationIcon from '../../../../assets/svg/contactPage/locationIcon.svg';
import { LocationStyled } from './LocationStyles';
import { GreenHeading } from '../../../UI/GreenHeading';
import { SubText } from '../../../UI/SubText';
import { ParagraphText } from '../../../UI/ParagraphText';

export const Location = () => {
	return (
		<LocationStyled>
			<div className="info">
				<GreenHeading>Location</GreenHeading>
				<SubText>Our Farms</SubText>
				<ParagraphText className="info__text">
					Established fact that a reader will be distracted by the
					readable content of a page when looking a layout. The point
					of using.
				</ParagraphText>
				<ul className="info__list">
					<li className="list__item">
						<img src={locationIcon} alt="" />
						<div className="item__location">
							<span className="location__city">
								New York, USA:
							</span>
							<ParagraphText>
								299 Park Avenue New York, New York 10171
							</ParagraphText>
						</div>
					</li>
					<li className="list__item">
						<img src={locationIcon} alt="" />
						<div className="item__location">
							<span className="location__city">London, UK:</span>
							<ParagraphText>
								30 Stamford Street, London SE1 9LQ
							</ParagraphText>
						</div>
					</li>
				</ul>
			</div>
		</LocationStyled>
	);
};
