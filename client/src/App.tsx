import { BrowserRouter } from 'react-router-dom';
import Layout from './routes/layout';
import './style/mediaQueries.css';
import './style/style.css';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Layout />
			</BrowserRouter>
		</div>
	);
}

export default App;
