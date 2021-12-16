import GlobalFonts from './fonts/fonts';
import GlobalStyles from './styles/styles';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/layout/Layout';
import Header from './components/layout/Header';
import Main from './components/layout/Main';
import Footer from './components/layout/Footer';

import Info from './components/page/Info';
import Detail from './components/page/Detail';
import Calc from './components/page/Calc';

const App = () => {
  return (
		<>
			<GlobalFonts />
			<GlobalStyles />
			<Layout>
				<Header />
				<Main>
					<Routes>
						<Route exact path="/" element={<Info />} />
						<Route path="/detail" element={<Detail />} />
						<Route path="/calc" element={<Calc />} />
					</Routes>
				</Main>
				<Footer />
			</Layout>
		</>
  );
}

export default App;
