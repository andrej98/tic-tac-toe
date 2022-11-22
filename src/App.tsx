import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';

import { darkTheme, lightTheme } from './utils/theme';
import { LanguageProvider } from './hooks/useTranslation';
import Layout from './components/Layout';
import Routes from './components/Routes';
import { UserProvider } from './hooks/useLoggedInUser';

const App = () => {
	const [darkMode, setDarkMode] = useState(true);

	return (
		<UserProvider>
			<LanguageProvider>
				<ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
					<BrowserRouter>
						<CssBaseline />
						<Layout darkMode={darkMode} setDarkMode={setDarkMode}>
							<Routes />
						</Layout>
					</BrowserRouter>
				</ThemeProvider>
			</LanguageProvider>
		</UserProvider>
	);
};

export default App;
