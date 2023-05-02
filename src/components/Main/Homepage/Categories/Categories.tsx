// React
import React from 'react';

// Packages
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

// Components
import { CategoriesStyled } from './CategoriesStyles';
import { GreenHeading } from '../../../UI/GreenHeading';
import { SubText } from '../../../UI/SubText';
import { ProductItem } from '../../../UI/ProductItem/ProductItem';
import { Btn } from '../../../UI/Btn';

export const Categories = () => {
	const { data } = useQuery(['products'], async () => {
		const res = await fetch(
			'https://organick-df998-default-rtdb.firebaseio.com/productItems.json'
		);

		return await res.json();
	});

	return (
		<CategoriesStyled>
			<GreenHeading>Categories</GreenHeading>
			<SubText>Our Products</SubText>
			<div className="products">
				{data?.slice(0, 8).map((item: any, i: number) => (
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
