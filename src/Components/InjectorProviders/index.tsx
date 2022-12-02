import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { DarkModeProvider } from '../../Hooks/UseDarkMode';
import { TestProvider } from '../../Hooks/UseTest';
import { Header } from '../Header';

export function InjectorProviders({ children }: { children: React.ReactNode }) {
	return (
		<BrowserRouter>
			<DarkModeProvider>
				<TestProvider>
					<Header />
					{children}
				</TestProvider>
			</DarkModeProvider>
		</BrowserRouter>
	);
}
