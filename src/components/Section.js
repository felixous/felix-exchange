import React, { useState } from 'react';
import styled from 'styled-components';

const ContentSection = styled.section`
	& {}
	& + & { margin-top: 60px; }
	& .section-head { display: flex; align-items: baseline; margin: 0 0 20px 0; }
	& .section-head h2 { font-size: 18px; }
	& .section-head .notice { margin: 0 0 0 12px; font-size: 13px; color: #b0b0b0; }
	& .section-main { padding: 0 0 0 40px; }
`;

const Section = ({ children }) => {
	const [title, setTitle] = useState('섹션 타이틀');
	const [notice, setNotice] = useState('기준일 2021/12/07');

	return (
		<ContentSection>
			<div className="section-head">
				<h2>{title}</h2>
				<span className="notice">{notice}</span>
			</div>
			<div className="section-main">
				{children}
			</div>
		</ContentSection>
	);
}

export default Section;