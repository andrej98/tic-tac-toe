import { FC } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Container, Toolbar, Button, Box, Switch } from '@mui/material';

import useLoggedInUser from '../hooks/useLoggedInUser';
import { signOut } from '../utils/firebase';
import { useTranslation } from '../hooks/useTranslation';

import LanguageSwitch from './LanguageSwitch';

type LayoutProps = {
	darkMode: boolean;
	setDarkMode: (dark: boolean) => void;
};

const Layout: FC<LayoutProps> = props => {
	const t = useTranslation();
	const user = useLoggedInUser();

	return (
		<>
			<AppBar position="fixed">
				<Container maxWidth="md">
					<Toolbar disableGutters sx={{ gap: 2 }}>
						<Button component={Link} to="/">
							{t('home')}
						</Button>
						<Button component={Link} to="/play">
							{t('play')}
						</Button>
						<Button component={Link} to="/about">
							{t('about')}
						</Button>
						<Button component={Link} to="/reviews">
							{t('reviews')}
						</Button>
						<Box sx={{ flexGrow: 1 }} />
						{!user ? (
							<Button component={Link} to="/login">
								{t('login')}
							</Button>
						) : (
							<Button onClick={signOut}>{t('logout')}</Button>
						)}
						<LanguageSwitch />
						<Switch
							checked={props.darkMode}
							onChange={() => props.setDarkMode(!props.darkMode)}
						/>
					</Toolbar>
				</Container>
			</AppBar>

			<Container
				maxWidth="sm"
				component="main"
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					height: '100vh',
					pt: 8,
					gap: 2
				}}
			>
				{props.children}
			</Container>
		</>
	);
};
export default Layout;
