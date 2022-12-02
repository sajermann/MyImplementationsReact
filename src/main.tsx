import React from 'react';
import ReactDOM from 'react-dom/client';
import './Config/i18n';
import App from './App';
import './global.css';
import { InjectorProviders } from './Components/InjectorProviders';
import RoutesConfig from './Components/RoutesConfig';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<InjectorProviders>
			<RoutesConfig />
		</InjectorProviders>
	</React.StrictMode>
);
