import React from 'react';
import person from '../../../assets/svg/person-icon.svg';
import { Btn } from '../Btn';
import { NewsItemStyled } from './NewsItemStyles';
import { Link } from 'react-router-dom';
import { NewsItemProps } from './NewsItemInterface';

export const NewsItem = ({
	backgroundImage,
	date,
	author,
	title,
	text,
	id,
}: NewsItemProps) => {
	return (
		<NewsItemStyled backgroundImage={backgroundImage}>
			<div className="item__date">{date}</div>
			<div className="item__content">
				<div className="content__author">
					<img src={person} alt="" />
					<span className="author__name">{author}</span>
				</div>

				<h3 className="content__title">{title}</h3>

				<p className="content__text">{text}</p>
				<Link to={'/news/' + id}>
					<Btn
						backgroundColor="#EFD372"
						textColor="#274C5B"
						padding="30px 50px"
					>
						Read More
					</Btn>
				</Link>
			</div>
		</NewsItemStyled>
	);
};
