import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { NewsItem } from '../../../UI/NewsItem/NewsItem';
import { AllNewsStyled } from './AllNewsStyles';

export const AllNews = () => {
	const { data, isLoading } = useQuery(['news'], async () => {
		const res = await fetch(
			'https://organick-df998-default-rtdb.firebaseio.com/news.json'
		);

		return await res.json();
	});
	return (
		<AllNewsStyled>
			{data?.map((item: any, i: number) => (
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
		</AllNewsStyled>
	);
};
