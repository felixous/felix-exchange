import React from 'react';
import styled from 'styled-components';

const AppFooter = styled.footer`
	& { position: absolute; bottom: 0; left: 0; width: 100%; }
	& > .inner { display: flex; align-items: center; max-width: 1200px; height: 120px; margin: 0 auto; padding: 0 30px; box-sizing: border-box; }
	& p { flex: 1; text-align: center; font-size: 13px; color: #b0b0b0; }
	& p a { text-decoration: underline; text-underline-position: under; }
	& p a:hover { opacity: .75; }
`;

const Footer = () => {
	return (
		<AppFooter>
			<div className="inner">
				<p>
					This website was made with the data provided by <a href="#none" target="_blank">freecurrencyapi.net</a>
				</p>
			</div>
		</AppFooter>
	);
}

export default Footer;