// React
import React from 'react';

// Packages
import { z, ZodType } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

// Component
import { FormStyled } from './FormStyles';

// Interfaces
import { FormData } from './FormInterface';

export const Form = () => {
	const schema: ZodType<FormData> = z.object({
		fullName: z.string().min(1),
		email: z.string().email(),
		company: z.string().min(1),
		subject: z.string().min(1),
		message: z.string().min(1),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<FormData>({
		resolver: zodResolver(schema),
	});

	const submitHandler = (data: FormData) => {
		console.log('Done', data);
		reset();
	};

	return (
		<FormStyled onSubmit={handleSubmit(submitHandler)}>
			<div className="form__element">
				<label className="element__label" htmlFor="">
					Full Name*
				</label>
				<input
					{...register('fullName')}
					placeholder="Your Full Name"
					className="element__input"
					type="text"
					style={{
						border: errors.fullName
							? '1px solid #ff7373'
							: '1px solid #ababab',
					}}
				/>
				{errors.fullName && (
					<span className="element__error">
						Full Name must contain at least 1 character
					</span>
				)}
			</div>
			<div className="form__element">
				<label className="element__label" htmlFor="">
					Your Email*
				</label>
				<input
					{...register('email')}
					placeholder="Your Email Address"
					className="element__input"
					type="text"
					style={{
						border: errors.email
							? '1px solid #ff7373'
							: '1px solid #ababab',
					}}
				/>
				{errors.email && (
					<span className="element__error">
						Please enter valid email address
					</span>
				)}
			</div>
			<div className="form__element">
				<label className="element__label" htmlFor="">
					Company*
				</label>
				<input
					{...register('company')}
					placeholder="Your Company Name"
					className="element__input"
					type="text"
					style={{
						border: errors.company
							? '1px solid #ff7373'
							: '1px solid #ababab',
					}}
				/>
				{errors.company && (
					<span className="element__error">
						Company name must contain at least 1 character
					</span>
				)}
			</div>
			<div className="form__element">
				<label className="element__label" htmlFor="">
					Subject*
				</label>
				<input
					{...register('subject')}
					placeholder="How Can We Help You?"
					className="element__input"
					type="text"
					style={{
						border: errors.subject
							? '1px solid #ff7373'
							: '1px solid #ababab',
					}}
				/>
				{errors.subject && (
					<span className="element__error">
						Please specify the subject of your request
					</span>
				)}
			</div>

			<div className="form__message">
				<label className="element__label" htmlFor="">
					Message*
				</label>
				<textarea
					{...register('message')}
					placeholder="Your Message"
					className="message__text"
					style={{
						border: errors.message
							? '1px solid #ff7373'
							: '1px solid #ababab',
					}}
				></textarea>
				{errors.message && (
					<span className="element__error">
						Please enter your message
					</span>
				)}
			</div>

			<button className="form__btn">Send Message</button>
		</FormStyled>
	);
};
