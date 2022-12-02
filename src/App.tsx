import { BrowserRouter } from 'react-router-dom';
import { Header } from './Components/Header';
import RoutesConfig from './Components/RoutesConfig';
import { DarkModeProvider } from './Hooks/UseDarkMode';
import { TestProvider } from './Hooks/UseTest';

function App() {
	return (
		<BrowserRouter>
			<DarkModeProvider>
				<TestProvider>
					<Header />
					<RoutesConfig />
				</TestProvider>
			</DarkModeProvider>
		</BrowserRouter>
	);
}

export default App;
