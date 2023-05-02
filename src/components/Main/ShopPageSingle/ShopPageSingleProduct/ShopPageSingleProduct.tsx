import React, {
	useState,
	useEffect,
	ChangeEvent,
	FormEventHandler,
} from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { ShopPageSingleProductStyled } from './ShopPageSingleProductStyles';
import starIcon from '../../../../assets/svg/star-icon.svg';
import { Btn } from '../../../UI/Btn';
import { ParagraphText } from '../../../UI/ParagraphText';
import { useDispatch } from 'react-redux';
import { addItem } from '../../../../store/cartSlice';
import { ProductItemInterface } from '../../../UI/ProductItem/ProductItemInterface';

export const ShopPageSingleProduct = () => {
	const dispatch = useDispatch();
	const [toggle, setToggle] = useState('product-description');
	const [itemAmount, setItemAmount] = useState(+1);

	const params = useParams();
	const { data, isLoading } = useQuery(['item'], async () => {
		const res = await fetch(
			`${import.meta.env.VITE_DATABASE}/productItems.json`
		);

		return await res.json();
	});

	useEffect(() => setItemAmount(1), [params]);

	if (!isLoading) {
		const [{ category, image, name, newPrice, oldPrice, id }] = data.filter(
			(item: ProductItemInterface) => item.id === params.name
		);

		const addToCartHandler: FormEventHandler = (e) => {
			e.preventDefault();

			const itemAmountNum = +itemAmount;

			dispatch(addItem({ image, itemAmountNum, name, id, newPrice }));
		};

		return (
			<ShopPageSingleProductStyled background={image}>
				<div className="product">
					<div className="product__image">
						<h2 className="image__category">{category}</h2>
					</div>
					<div className="product__desription">
						<h2 className="desription__heading">{name}</h2>
						<div className="description__stars">
							<img src={starIcon} alt="" />
							<img src={starIcon} alt="" />
							<img src={starIcon} alt="" />
							<img src={starIcon} alt="" />
							<img src={starIcon} alt="" />
						</div>
						<div className="description__price">
							<span className="price__old">${oldPrice}.00</span>
							<span className="price__new">${newPrice}.00</span>
						</div>
						<p className="description__paragraph">
							Simply dummy text of the printing and typesetting
							industry. Lorem had ceased to been the industry's
							standard dummy text ever since the 1500s, when an
							unknown printer took a galley.
						</p>
						<div className="description__actions">
							<span className="actions__quantity">
								Quantity :
							</span>
							<form className="actions__form" action="">
								<input
									className="form__input"
									type="number"
									min={1}
									onChange={(
										e: ChangeEvent<HTMLInputElement>
									) => setItemAmount(+e.target.value)}
									value={itemAmount}
								/>
								<Btn
									backgroundColor="#274C5B"
									textColor="#fff"
									padding="25px 40px"
									onClick={addToCartHandler}
								>
									Add To Cart
								</Btn>
							</form>
						</div>
					</div>
				</div>
				<div className="additional-description">
					<div className="actions">
						<button
							onClick={() => setToggle('product-description')}
							className={`actions__btn ${
								toggle === 'product-description'
									? 'actions__btn actions-active'
									: ''
							}`}
						>
							Product Description
						</button>
						<button
							onClick={() => setToggle('about-info')}
							className={`actions__btn ${
								toggle === 'about-info'
									? 'actions__btn actions-active'
									: ''
							}`}
						>
							Additional Info
						</button>
					</div>
					{toggle === 'product-description' ? (
						<ParagraphText className="additional-description__paragraph paragraph">
							Welcome to the world of natural and organic. Here
							you can discover the bounty of nature. We have grown
							on the principles of health, ecology, and care. We
							aim to give our customers a healthy chemical-free
							meal for perfect nutrition. It offers about 8–10%
							carbs. Simple sugars — such as glucose and fructose
							— make up 70% and 80% of the carbs in raw.
						</ParagraphText>
					) : (
						<p>
							<ParagraphText className="additional-description__paragraph paragraph">
								Lorem ipsum dolor sit, amet consectetur
								adipisicing elit. Harum consectetur quis odit
								velit accusamus enim voluptatum voluptas,
								expedita, error eaque eos! Adipisci quidem rem
								illum velit ut dicta placeat in accusamus
								eligendi dolore non voluptatem laboriosam eius
								est consequatur nesciunt possimus quasi rerum
								exercitationem voluptatum voluptatibus, iste
								labore odit. Veniam nisi perspiciatis odio ut
								officiis suscipit vitae magni dolor fugiat.
							</ParagraphText>
						</p>
					)}
				</div>
			</ShopPageSingleProductStyled>
		);
	}

	return null;
};
