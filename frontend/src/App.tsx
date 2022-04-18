import React, {useEffect, useState} from 'react';
// import { useHistory, useLocation } from 'react-router-dom';
// import { Button } from '@mantine/core';

// import logo from './logo.svg';
// import './App.css';

import axios from './utils/axiosConfig.jsx';
import SpotifyAuthLink from './spotifyAuthLink';

import { Button } from '@mui/material'

// import { MantineProvider } from '@mantine/core';
// import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
// import theme from './theme';

// import theme from './theme';

const App = () => {
	// const location = useLocation();
	// const history = useHistory();


	// const term = queryParams.get("term")
	// console.log(term) //pizza

	// const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [userData, setUserData] = useState({});

	useEffect(() => {
		const queryParams = new URLSearchParams(window.location.search);
		// console.log(queryParams);
		// const code = queryParams.get('code');
		if (queryParams.has('code')) {
			// console.log('post the code to server here', code);

			// http://127.0.0.1:8000/

			// fetch('http://127.0.0.1:8000/auth/access_code', {
			// 	method: 'POST',
			// 	headers: {
			// 		'Accept': 'application/json, text/plain, */*',
			// 		'Content-Type': 'application/json'
			// 	},
			// 	body: JSON.stringify({code: queryParams.get('code')})
			// }).then(res => res.json())
			// .then(res => {
			// 	console.log(res);
			// 	setUserData(res);
			// });

			const access_code = queryParams.get('code')

			axios.post('/auth/access_code',
				JSON.stringify({code: access_code}),
				{
					headers: {
						'Accept': 'application/json, text/plain, */*',
						'Content-Type': 'application/json'
					},
				}
			)
            .then((response: { [key: string]: any }) => {
				console.log(response.data);
				setUserData(response.data);
            })
            .catch((error: Error) => {
                console.error(error);
            });

			// queryParams.delete('code');
			// history.replace({
			// 	search: queryParams.toString(),
			// })

		}
	}, [userData]);

	// const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
	// const CLIENT_ID = '12073d0b13714c47908d90ca2c88ad7d';
	// const REDIRECT_URI = 'http://localhost:3000/';
	// const SCOPES = 'user-read-private user-read-email';
	// const RESPONSE_TYPE = 'code';

	// const get_token_uri = () => {
	// 	return `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPES}`
	// }


	// const getCode = () => {
	// 	const query_params = new URLSearchParams({
	// 		'client_id': clientID,
	// 		'response_type': 'code',
	// 		'redirect_uri': redirectURI,
	// 		'scope': scopes,
	// 	});

	// 	fetch('https://accounts.spotify.com/authorize?' + queryParams)
	// 	.then(response => response.json())
	// 	.then(data => console.log(data));
	// }


	

  return (

		<>
		{/* <header> */}
			{/* <img src={logo} className="App-logo" alt="logo" /> */}
			{/* <p>
			Edit <code>src/App.tsx</code> and save to reload.
			</p> */}
			{/* <a
			className="App-link"
			href="https://reactjs.org"
			target="_blank"
			rel="noopener noreferrer"
			>
			Learn React
			</a> */}

			{/* <button
				onClick={() => getCode()}
			>
				CLICK
			</button> */}
			{/* <a href={get_token_uri()}>Login to Spotify</a> */}
			
		{/* </header> */}
			<Button variant="outlined">Hello world!</Button>
			
			<SpotifyAuthLink />
			<p>{JSON.stringify(userData)}</p>
		</>

  );
}

export default App;
