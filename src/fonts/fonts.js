import { createGlobalStyle } from 'styled-components';

import SpoqaHanSansNeoBoldWoff from './SpoqaHanSansNeo-Bold.woff';
import SpoqaHanSansNeoBoldWoff2 from './SpoqaHanSansNeo-Bold.woff2';
import SpoqaHanSansNeoMediumWoff from './SpoqaHanSansNeo-Medium.woff';
import SpoqaHanSansNeoMediumWoff2 from './SpoqaHanSansNeo-Medium.woff2';
import SpoqaHanSansNeoRegularWoff from './SpoqaHanSansNeo-Regular.woff';
import SpoqaHanSansNeoRegularWoff2 from './SpoqaHanSansNeo-Regular.woff2';

export default createGlobalStyle`
	@font-face {
		font-family: 'Spoqa Han Sans Neo';
		font-style: normal;
		font-weight: 400;
		src: url(${SpoqaHanSansNeoRegularWoff2}) format('woff2'), /* Super Modern Browsers */
				url(${SpoqaHanSansNeoRegularWoff}) format('woff'); /* Modern Browsers */
	}
	@font-face {
		font-family: 'Spoqa Han Sans Neo';
		font-style: normal;
		font-weight: 500;
		src: url(${SpoqaHanSansNeoMediumWoff2}) format('woff2'), /* Super Modern Browsers */
				url(${SpoqaHanSansNeoMediumWoff}) format('woff'); /* Modern Browsers */
	}
	@font-face {
		font-family: 'Spoqa Han Sans Neo';
		font-style: normal;
		font-weight: 700;
		src: url(${SpoqaHanSansNeoBoldWoff2}) format('woff2'), /* Super Modern Browsers */
				url(${SpoqaHanSansNeoBoldWoff}) format('woff'); /* Modern Browsers */
	}
	html {
		font-family: 'Spoqa Han Sans Neo', 'sans-serif';
	}
`