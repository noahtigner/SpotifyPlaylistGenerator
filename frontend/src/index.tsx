import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from "react-router-dom";
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
import Dashboard from 'components/Dashboard';


const App = () => {
	return (
		<React.StrictMode>
			<ThemeProvider theme={theme}>
				<CssBaseline enableColorScheme/>

				<Header />

				<HashRouter>
					<Routes>

						<Route path='/spotify_redirect' element={<SpotifyAuthRedirect />} />
							
						<Route path='/dashboard' element={<AuthenticatedRoute content={<Dashboard />}/>} />

						<Route path='/' element={
							<>
								<Button variant="outlined" size="small">Hello world!</Button>
								<SpotifyAuthLink />
							</>
						} />

					</Routes>
				</HashRouter>
			</ThemeProvider>
		</React.StrictMode>
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
