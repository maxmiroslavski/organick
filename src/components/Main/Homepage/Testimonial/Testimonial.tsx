import React from 'react';
import { TestimonialStyled } from './TestimonialStyles';
import { GreenHeading } from '../../../UI/GreenHeading';
import { SubText } from '../../../UI/SubText';
import { AchivmentItem } from './AchivmentItem';
import customer from '../../../../assets/img/sara-taylor.jpg';
import ratingStar from '../../../../assets/svg/star-icon.svg';
import { ParagraphText } from '../../../UI/ParagraphText';

export const Testimonial = () => {
	return (
		<TestimonialStyled>
			<GreenHeading className="heading">Testimonial</GreenHeading>
			<SubText className="subheading">What Our Customer Saying?</SubText>
			<div className="customer">
				<img src={customer} alt="" />
				<div className="customer__rating">
					<img className="rating__star" src={ratingStar} alt="" />
					<img className="rating__star" src={ratingStar} alt="" />
					<img className="rating__star" src={ratingStar} alt="" />
					<img className="rating__star" src={ratingStar} alt="" />
					<img className="rating__star" src={ratingStar} alt="" />
				</div>
				<ParagraphText className="paragraph">
					Simply dummy text of the printing and typesetting industry.
					Lorem Ipsum simply dummy text of the printing and
					typesetting industry. Lorem Ipsum has been.
				</ParagraphText>

				<span className="customer__name">Sara Taylor</span>
				<span className="customer__role">Consumer</span>
			</div>

			<div className="border"></div>

			<div className="achivments">
				<AchivmentItem number="100%" comment="Organic" />
				<AchivmentItem number="285" comment="Active Product" />
				<AchivmentItem number="350+" comment="Organic Orchads" />
				<AchivmentItem number="25+" comment="Years of Farming" />
			</div>
		</TestimonialStyled>
	);
};
