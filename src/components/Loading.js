import React from 'react';
import styled from 'styled-components';

import loadingImg from '../images/loading.gif';

const StyledLoading = styled.div`
	& { display: inline-block; }
	& img { width: 30px; }
`;

const Loading = () => {
	return (
		<StyledLoading className="loading">
			<img src={loadingImg} alt="로딩중" />
		</StyledLoading>
	);
};

export default Loading;