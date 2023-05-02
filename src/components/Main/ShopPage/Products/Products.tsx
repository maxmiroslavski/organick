import React from 'react';
import { ProductsStyled } from './ProductsStyles';
import { ProductItem } from '../../../UI/ProductItem/ProductItem';
import { useQuery } from '@tanstack/react-query';
import { ProductItemInterface } from '../../../UI/ProductItem/ProductItemInterface';

export const Products = () => {
	const { data } = useQuery(['products'], async () => {
		const res = await fetch(
			'https://organick-df998-default-rtdb.firebaseio.com/productItems.json'
		);

		return await res.json();
	});
	return (
		<ProductsStyled>
			{data?.map((item: ProductItemInterface, i: number) => (
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
		</ProductsStyled>
	);
};
