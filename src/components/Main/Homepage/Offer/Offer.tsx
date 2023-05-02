import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { OfferStyled } from './OfferStyles';
import { ProductItem } from '../../../UI/ProductItem/ProductItem';
import { GreenHeading } from '../../../UI/GreenHeading';
import { Btn } from '../../../UI/Btn';
import { ProductItemInterface } from '../../../UI/ProductItem/ProductItemInterface';

export const Offer = () => {
	const { data } = useQuery(['products'], async () => {
		const res = await fetch(
			`${import.meta.env.VITE_DATABASE}/productItems.json`
		);

		return await res.json();
	});

	return (
		<OfferStyled>
			<div className="description">
				<div className="">
					<GreenHeading className="heading">Offer</GreenHeading>
					<span className="description__text">
						We Offer Organic For You
					</span>
				</div>
				<Link to="/organick/shop">
					<Btn
						textColor="#274C5B"
						backgroundColor="#EFD372"
						padding="25px 40px"
					>
						View All Product
					</Btn>
				</Link>
			</div>

			<div className="products">
				{data?.slice(0, 4).map((item: ProductItemInterface, i: any) => (
					<ProductItem
						key={i}
						id={item.id}
						category={item.category}
						image={item.image}
						name={item.name}
						oldPrice={item.oldPrice}
						newPrice={item.newPrice}
					/>
				))}
			</div>
		</OfferStyled>
	);
};
