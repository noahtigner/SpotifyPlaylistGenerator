import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
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

					<Button color="primary" variant="outlined" size="small">Login</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
}

export default Header;
