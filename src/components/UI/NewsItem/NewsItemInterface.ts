export interface NewsItemInterface {
	author: string;
	date: string;
	description: string;
	fullName: string;
	id: string;
	image: string;
	title: string;
}

export interface NewsItemProps {
	backgroundImage: string;
	date: string;
	author: string;
	title: string;
	text: string;
	id: string | number;
}
