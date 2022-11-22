import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
	// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
	interface Palette {
		playerX?: string;
		playerO?: string;
	}
	// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
	interface PaletteOptions {
		playerX?: string;
		playerO?: string;
	}
}

export const darkTheme = createTheme({
	palette: {
		primary: { main: '#f2d45c' },
		playerX: '#f25a5a',
		playerO: '#5a8cf2',
		mode: 'dark'
	}
});

export const lightTheme = createTheme({
	palette: {
		primary: { main: '#f2d45c' },
		playerX: '#f25a5a',
		playerO: '#5a8cf2',
		mode: 'light'
	}
});
