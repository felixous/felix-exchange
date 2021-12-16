import React from 'react';
import styled from 'styled-components';

const AppMain = styled.main`
	& > .inner { max-width: 1200px; margin: 0 auto; padding: 10px 30px 40px; box-sizing: border-box; }
`;

const Main = ({ children }) => {
	return (
		<AppMain>
			<div className="inner">
				{children}
			</div>
		</AppMain>
	);
}

export default Main;