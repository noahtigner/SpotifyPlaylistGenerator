import React, {useEffect, useState} from 'react';
import { useNavigate, useSearchParams, createSearchParams } from 'react-router-dom';
import { useAppSelector as useSelector, useAppDispatch as useDispatch } from 'state/hooks';


import axios from 'utils/axiosConfig.jsx';
// import SpotifyAuthLink from 'components/spotifyAuthorization/SpotifyAuthLink';


const SpotifyAuthRedirect = () => {
	// const [userData, setUserData] = useState({});
	const navigate = useNavigate();
	const [search, setSearch] = useSearchParams();
	const userData = useSelector(state => state.userData);
	const dispatch = useDispatch();

	useEffect(() => {
		const queryParams = new URLSearchParams(window.location.search);
		// const access_code = search.get('code');
		// console.log(access_code);

		if(userData.id !== '') {
			navigate('/dashboard', { replace: true });
		}

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
            .then((response: {[key: string]: any }) => {
				console.log(response.data);
				// setUserData(response.data);
				// window.location.search = "";
				// history.replace({
				// 	search: '',
				// })
				// window.localStorage.setItem('userData', 
				// 	JSON.stringify({
				// 		token: response.data.token,
				// 		id: response.data.user_id
				// 	})
				// );

				dispatch({ type: 'userData/updated', payload: {
					token: response.data.token,
					id: response.data.user_id
				}});

				console.log('redirecting');
				// setSearch({});
				navigate('/dashboard', { replace: true });
            })
            .catch((error: Error) => {
				console.error(error);
				// history.replace({
				// 	search: '',
				// })
				navigate("/login");
            });

			// // queryParams.delete('code');
			// history.replace({
			// 	search: '',
			// })

		}
		else{
			console.log('else')
			navigate("/login");
		}
	}, []);
    
    return (
		<>
			{/* <SpotifyAuthLink /> */}
			{/* <p>{JSON.stringify(userData)}</p> */}
		</>
    )
}

export default SpotifyAuthRedirect;
