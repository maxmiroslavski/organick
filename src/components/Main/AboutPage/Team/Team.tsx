import React from 'react';
import { teamData } from './TeamData';
import { TeamStyled } from './TeamStyles';
import { GreenHeading } from '../../../UI/GreenHeading';
import { SubText } from '../../../UI/SubText';
import { ParagraphText } from '../../../UI/ParagraphText';
import { TeamItem } from './TeamItem';

export const Team = () => {
	return (
		<TeamStyled>
			<GreenHeading>Team</GreenHeading>
			<SubText>Our Organic Experts</SubText>
			<ParagraphText className="text">
				Simply dummy text of the printing and typesetting industry.
				Lorem had ceased to been the industry's standard dummy text ever
				since the 1500s, when an unknown printer took a galley.
			</ParagraphText>

			<div className="team-members">
				{teamData.map((item, i) => (
					<TeamItem
						key={i}
						image={item.image}
						role={item.role}
						name={item.name}
					/>
				))}
			</div>
		</TeamStyled>
	);
};
