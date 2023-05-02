import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './store/store';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const client = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<BrowserRouter>
		<QueryClientProvider client={client}>
			<React.StrictMode>
				<Provider store={store}>
					<App />
				</Provider>
			</React.StrictMode>
		</QueryClientProvider>
	</BrowserRouter>
);
