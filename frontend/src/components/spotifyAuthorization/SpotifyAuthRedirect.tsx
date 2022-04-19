import React, {useEffect, useState} from 'react';

import axios from 'utils/axiosConfig.jsx';
// import SpotifyAuthLink from 'components/spotifyAuthorization/SpotifyAuthLink';


const SpotifyAuthRedirect = () => {
    const [userData, setUserData] = useState({});

	useEffect(() => {
		const queryParams = new URLSearchParams(window.location.search);

		if (queryParams.has('code')) {
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
    
    return (
		<>
			{/* <SpotifyAuthLink /> */}
			<p>{JSON.stringify(userData)}</p>
		</>
    )
}

export default SpotifyAuthRedirect;
