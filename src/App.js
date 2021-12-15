import GlobalFonts from './fonts/fonts';
import GlobalStyles from './styles/styles';

import { Routes, Route } from 'react-router-dom';

import Info from './pages/Info';
import Detail from './pages/Detail';
import Calc from './pages/Calc';

function App() {
  return (
		<>
			<GlobalFonts />
			<GlobalStyles />
			<Routes>
				<Route exact path="/" element={<Info />} />
				<Route path="/detail" element={<Detail />} />
				<Route path="/calc" element={<Calc />} />
			</Routes>
		</>
  );
}

export default App;
