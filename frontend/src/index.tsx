import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from "react-router-dom";

import { Provider as StateProvider } from 'react-redux';
import store from 'state/store';
// import reportWebVitals from './reportWebVitals';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles'
import { Button } from '@mui/material'

import './styles/index.css';
import theme from './styles/theme';

import Header from 'components/_layout/Header';
import SpotifyAuthRedirect from 'components/spotifyAuthorization/SpotifyAuthRedirect'
import SpotifyAuthLink from 'components/spotifyAuthorization/SpotifyAuthLink';
import AuthenticatedRoute from 'components/AuthenticatedRoute';
import UnAuthenticatedRoute from 'components/UnAuthenticatedRoute';
import Dashboard from 'components/Dashboard';


const App = () => {
	return (
		// <React.StrictMode>
			<StateProvider store={store}>
				<ThemeProvider theme={theme}>
					<CssBaseline enableColorScheme/>

					<HashRouter>
						<Header />

						<Routes>
							{/* AUTHENTICATED */}
							<Route path='/dashboard' element={
								<AuthenticatedRoute content={
									<Dashboard />
								}/>
							} />

							{/* UNAUTHENTICATED */}
							<Route path='/login' element={<UnAuthenticatedRoute />} />
							<Route path='/' element={<SpotifyAuthRedirect />} />

						</Routes>
					</HashRouter>
				</ThemeProvider>
			</StateProvider>
		// </React.StrictMode>
	)
};


const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render( <App /> );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
