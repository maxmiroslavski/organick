import React from 'react';
import { AdditionalInfoStyled } from './AdditionalInfoStyles';
import { ParagraphText } from '../../../UI/ParagraphText';
import { SubText } from '../../../UI/SubText';

export const AdditionalInfo = () => {
	return (
		<AdditionalInfoStyled>
			<ParagraphText>
				Uniquely matrix economically sound value through cooperative
				technology. Competently parallel task fully researched data and
				enterprise process improvements. Collaboratively expedite
				quality manufactured products via client-focused results quickly
				communicate enabled technology and turnkey leadership skills.
				Uniquely enable accurate supply chains rather than friction
				technology.
			</ParagraphText>

			<SubText className="heading">Advantages Of Organick Food</SubText>
			<ParagraphText>
				It is a long established fact that a reader will be distracted
				by the readable content of a page when looking a layout. The
				point of using Lorem Ipsum is that it has a more-or-less normal
				distribution of letters, as opposed to using 'Content here,
				content here', making it look like readable English.
			</ParagraphText>
			<ul className="list">
				<li>
					<ParagraphText>
						Publishing packages and web pageLorem Ipsum as their
						default
					</ParagraphText>
				</li>
				<li>
					<ParagraphText>
						Content here, content here', making it look like
						readable
					</ParagraphText>
				</li>
				<li>
					<ParagraphText>
						Packages and web pageLorem Ipsum as their default
					</ParagraphText>
				</li>
			</ul>
			<SubText className="subheading">
				Make perfect organic product with us
			</SubText>
			<ParagraphText>
				It is a long established fact that a reader will be distracted
				by the readable content of a page when looking a layout. The
				point of using Lorem Ipsum is that it has a more-or-less normal
				distribution of letters, as opposed to using 'Content here,
				content here', making it look like readable English.
			</ParagraphText>
			<ol className="list numeric">
				<li>
					<ParagraphText>
						Publishing packages and web pageLorem Ipsum as their
						default
					</ParagraphText>
				</li>
				<li>
					<ParagraphText>
						Content here, content here', making it look like
						readable
					</ParagraphText>
				</li>
				<li>
					<ParagraphText>
						Packages and web pageLorem Ipsum as their default
					</ParagraphText>
				</li>
				<li>
					<ParagraphText>
						More-or-less normal distribution of letters
					</ParagraphText>
				</li>
			</ol>
		</AdditionalInfoStyled>
	);
};
