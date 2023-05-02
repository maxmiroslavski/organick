import { SpecialOffersStyled } from './SpecialOffersStyles';
import { OfferItem } from './OfferItem';
import { useQuery } from '@tanstack/react-query';

export const SpecialOffers = () => {
	const { data } = useQuery(['offers'], async () => {
		const res = await fetch(
			'https://organick-df998-default-rtdb.firebaseio.com/offerData.json'
		);
		return await res.json();
	});

	return (
		<SpecialOffersStyled>
			{data?.map((offer: any, i: any) => (
				<OfferItem
					key={i}
					img={offer.img}
					title={offer.title}
					titleColor={offer.titleColor}
					text={offer.text}
					textColor={offer.textColor}
				/>
			))}
		</SpecialOffersStyled>
	);
};
