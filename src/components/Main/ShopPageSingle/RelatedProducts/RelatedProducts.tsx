import React from 'react';
import { RealatedProductsStyled } from './RelatedProductsStyles';

import { useQuery } from '@tanstack/react-query';
import { ProductItem } from '../../../UI/ProductItem/ProductItem';
import { SubText } from '../../../UI/SubText';
import { ProductItemInterface } from '../../../UI/ProductItem/ProductItemInterface';

export const RelatedProducts = () => {
	const { data } = useQuery(['products'], async () => {
		const res = await fetch(
			'https://organick-df998-default-rtdb.firebaseio.com/productItems.json'
		);

		return await res.json();
	});
	return (
		<RealatedProductsStyled>
			<SubText className="heading">Related Products</SubText>
			<div className="products">
				{data
					?.slice(0, 4)
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
		</RealatedProductsStyled>
	);
};
