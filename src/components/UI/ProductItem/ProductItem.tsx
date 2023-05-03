import React from 'react';
import { Link } from 'react-router-dom';

import starRating from '../../../assets/svg/star-icon.svg';
import { ProductItemStyled } from './ProductItemStyles';

export const ProductItem = (props: {
	category: string;
	image: string;
	name: string;
	oldPrice: number;
	newPrice: number;
	id: string;
}) => {
	const { category, image, name, oldPrice, newPrice, id } = props;
	return (
		<Link to={'/shop/' + id}>
			<ProductItemStyled background={image}>
				<div className="item__category">{category}</div>
				<div className="item__description">
					<h3 className="description__name">{name}</h3>

					<div className="description__border"></div>

					<div className="description__price">
						<div className="price__info">
							<span className="info__old-price">
								${oldPrice}.00
							</span>
							<span className="info__new-price">
								${newPrice}.00
							</span>
						</div>
						<div className="price__rating">
							<img src={starRating} alt="" />
							<img src={starRating} alt="" />
							<img src={starRating} alt="" />
							<img src={starRating} alt="" />
							<img src={starRating} alt="" />
						</div>
					</div>
				</div>
			</ProductItemStyled>
		</Link>
	);
};
