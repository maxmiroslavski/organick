import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { NewsStyled } from './NewsStyles';
import { GreenHeading } from '../../../UI/GreenHeading';
import { SubText } from '../../../UI/SubText';
import { Btn } from '../../../UI/Btn';
import { NewsItem } from '../../../UI/NewsItem/NewsItem';
import { NewsItemInterface } from '../../../UI/NewsItem/NewsItemInterface';

export const News = () => {
	const { data } = useQuery(['news'], async () => {
		const res = await fetch(`${import.meta.env.VITE_DATABASE}/news.json`);

		return await res.json();
	});
	return (
		<NewsStyled>
			<div className="description">
				<div>
					<GreenHeading className="heading">News</GreenHeading>
					<SubText className="subtext">
						Discover weekly content about organic food, & more
					</SubText>
				</div>
				<Link to="/news">
					<Btn
						backgroundColor="transparent"
						textColor="#274C5B"
						border="2px solid #274C5B"
						padding="25px 45px"
					>
						More News
					</Btn>
				</Link>
			</div>

			<div className="news">
				{data?.slice(0, 2).map((item: NewsItemInterface, i: number) => (
					<NewsItem
						key={i}
						backgroundImage={item.image}
						author={item.author}
						date={item.date}
						id={item.id}
						text={item.description}
						title={item.title}
					/>
				))}
			</div>
		</NewsStyled>
	);
};
