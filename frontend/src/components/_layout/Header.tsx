import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppSelector as useSelector, useAppDispatch as useDispatch } from 'state/hooks';

import { AppBar, Box, Toolbar, Typography, Button, IconButton, Chip, ButtonGroup } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';

import getSpotifyAuthLink from 'utils/getSpotifyAuthLink';

const Header = () => {
	const userData = useSelector(state => state.userData);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const logOut = () => {
		dispatch({ type: 'userData/updated', payload: {
			token: '',
			id: ''
		}});
		navigate('/', { replace: true });
	}

	const logIn = () => {
		window.location.replace(getSpotifyAuthLink());
	}

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar variant="dense">
					<IconButton
						size="large"
						edge="start"
						color="primary"
						aria-label="menu"
						sx={{ mr: 2 }}
					>
						<MenuIcon />
					</IconButton>
					<Typography color="primary" variant="h6" component="div" sx={{ flexGrow: 1 }}>
						Playlist Generator
					</Typography>

					<>
						
						{/* {userData.id !== '' ? <Chip icon={<AccountCircleIcon />} label={userData.id} /> : null} */}
						{/* <Button endIcon={<LogoutIcon />} color="primary" variant="outlined" size="small" onClick={() => logOut()}>Log Out</Button> */}
						<ButtonGroup size="small" aria-label="small button group">
							{userData.id !== '' ?
								<>
									<Button startIcon={<AccountCircleIcon />} disabled color="primary" variant="outlined" size="small">{userData.id}</Button>
									<Button endIcon={<LogoutIcon />} color="primary" variant="outlined" size="small" onClick={() => logOut()}>Log Out</Button>
								</>
								:
								<Button endIcon={<LoginIcon />} color="primary" variant="outlined" size="small" onClick={() => logIn()}>Log In</Button>
							}
							
						</ButtonGroup>
					</>
				</Toolbar>
			</AppBar>
		</Box>
	);
}

export default Header;
