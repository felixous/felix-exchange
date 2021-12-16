import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const AppHeader = styled.header`
	& > .inner { display: flex; justify-content: space-between; align-items: center; max-width: 1200px; height: 80px; margin: 0 auto; padding: 0 30px; box-sizing: border-box; }
	& .title-box { display: flex; align-items: center; }
	& .title-box h1 { font-size: 18px; font-weight: 700; }
	& .title-box .base { margin: 0 0 0 16px; font-size: 14px; color: #b0b0b0; }
	& ul.menu-list { display: flex; align-items: center; }
	& ul.menu-list li { position: relative; margin: 0 0 0 20px; font-size: 14px; font-weight: 500; }
	& ul.menu-list li.is-active { color: #909090; }
	& ul.menu-list li a {}
	& ul.menu-list li a:hover { opacity: .75; }
`;

const Header = () => {
	return (
		<AppHeader>
			<div className="inner">
				<div className="title-box">
					<h1>Felix's Exchange</h1>
					<span className="base">Based on KRW</span>
				</div>
				<ul className="menu-list">
					<li className="is-active"><Link to="/">환율정보</Link></li>
					<li><Link to="/detail">환율상세</Link></li>
					<li><Link to="/calc">환율계산기</Link></li>
				</ul>
			</div>
		</AppHeader>
	);
}

export default Header;