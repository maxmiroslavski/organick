import React from 'react';
import { TeamItemStyled } from './TeamStyles';
import { SubText } from '../../../UI/SubText';
import { GreenHeading } from '../../../UI/GreenHeading';

import instagram from '../../../../assets/svg/socialMediaIcons/instagramIcon.svg';
import facebook from '../../../../assets/svg/socialMediaIcons/facebookIcon.svg';
import tweeter from '../../../../assets/svg/socialMediaIcons/tweeterIcon.svg';

export const TeamItem = ({
	image,
	name,
	role,
}: {
	image: string;
	name: string;
	role: string;
}) => {
	return (
		<TeamItemStyled image={image}>
			<div className="image"></div>
			<div className="person__description">
				<div className="description__content">
					<SubText className="name">{name}</SubText>
					<GreenHeading className="role">{role}</GreenHeading>
				</div>
				<div className="description__social-media">
					<img
						className="social-media__icon"
						src={instagram}
						alt=""
					/>
					<img className="social-media__icon" src={facebook} alt="" />
					<img className="social-media__icon" src={tweeter} alt="" />
				</div>
			</div>
		</TeamItemStyled>
	);
};
