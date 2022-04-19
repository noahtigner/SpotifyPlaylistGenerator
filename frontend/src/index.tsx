import React from 'react';
import ReactDOM from 'react-dom/client';
// import reportWebVitals from './reportWebVitals';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles'
import { Button } from '@mui/material'

import './styles/index.css';
import theme from './styles/theme';

import Header from 'components/_layout/Header';
import SpotifyAuthRedirect from 'components/spotifyAuthorization/SpotifyAuthRedirect'
import SpotifyAuthLink from 'components/spotifyAuthorization/SpotifyAuthLink';


const App = () => (
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<CssBaseline enableColorScheme/>

			<Header />
			<Button variant="outlined" size="small">Hello world!</Button>
			
			<SpotifyAuthLink />
			<SpotifyAuthRedirect />
		</ThemeProvider>
	</React.StrictMode>
);


const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render( <App /> );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
