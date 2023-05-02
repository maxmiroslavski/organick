import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { CategoriesStyled } from './CategoriesStyles';
import { GreenHeading } from '../../../UI/GreenHeading';
import { SubText } from '../../../UI/SubText';
import { ProductItem } from '../../../UI/ProductItem/ProductItem';
import { Btn } from '../../../UI/Btn';
import { ProductItemInterface } from '../../../UI/ProductItem/ProductItemInterface';

export const Categories = () => {
	const { data } = useQuery(['products'], async () => {
		const res = await fetch(
			`${import.meta.env.VITE_DATABASE}/productItems.json`
		);

		return await res.json();
	});

	return (
		<CategoriesStyled>
			<GreenHeading>Categories</GreenHeading>
			<SubText>Our Products</SubText>
			<div className="products">
				{data
					?.slice(0, 8)
					.map((item: ProductItemInterface, i: number) => (
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
			<Link to="/shop">
				<Btn
					textColor="#fff"
					backgroundColor="#274C5B"
					padding="30px 45px"
				>
					Load More
				</Btn>
			</Link>
		</CategoriesStyled>
	);
};
