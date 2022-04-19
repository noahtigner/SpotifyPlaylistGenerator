import { createTheme, } from '@mui/material/styles'

const theme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#8BBF9F',
		},
		secondary: {
			main: '#E4CB9A',
		},
	},
	spacing: 4,
	shape: {
		borderRadius: 4,
	},
});

export default theme;
