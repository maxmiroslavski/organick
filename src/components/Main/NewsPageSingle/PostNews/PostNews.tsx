import React from 'react';
import { PostNewsStyled } from './PostNewsStyles';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import personIcon from '../../../../assets/svg/person-icon.svg';
import { SubText } from '../../../UI/SubText';
import { ParagraphText } from '../../../UI/ParagraphText';
import { NewsItemInterface } from '../../../UI/NewsItem/NewsItemInterface';

export const PostNews = () => {
	const params = useParams();
	const { data, isLoading } = useQuery(['news'], async () => {
		const res = await fetch(`${import.meta.env.VITE_DATABASE}/news.json`);
		return res.json();
	});

	if (!isLoading) {
		const [{ author, description, fullDate, image, title }] = data.filter(
			(item: NewsItemInterface) => item.id === params.name
		);

		return (
			<PostNewsStyled background={image}>
				<div className="banner">
					<div className="banner__description">
						<div className="description__post-info">
							<div className="post-info__date">
								<span className="date__posted-on">
									Posted On:
								</span>
								<span className="date__full-date">
									{fullDate}
								</span>
							</div>
							<div className="post-info__author">
								<img src={personIcon} alt="" />
								<span className="author__name">{author}</span>
							</div>
						</div>
						<SubText className="description__heading">
							{title}
						</SubText>
						<ParagraphText>{description}</ParagraphText>
					</div>
				</div>
			</PostNewsStyled>
		);
	}

	return null;
};
