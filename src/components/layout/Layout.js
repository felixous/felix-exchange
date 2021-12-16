import React from 'react';
import styled from 'styled-components';

const AppLayout = styled.div`
	& { position: relative; min-height: 100vh; padding: 0 0 120px 0; box-sizing: border-box; }
`;

const Layout = ({ children }) => {
	return (
		<AppLayout>
			{children}
		</AppLayout>
	);
};

export default Layout;
