import { Switch, Route } from 'react-router-dom';

import useLoggedInUser from '../hooks/useLoggedInUser';
import About from '../pages/About';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Play from '../pages/Play';
import Reviews from '../pages/Reviews';

const Routes = () => {
	const user = useLoggedInUser();
	return (
		<Switch>
			<Route
				path="/"
				exact
				render={() => <Home username={user?.email ?? undefined} />}
			/>
			<Route path="/play" exact component={Play} />
			<Route path="/about" exact component={About} />
			<Route path="/reviews" exact component={Reviews} />
			{!user && <Route path="/login" exact component={Login} />}
			<Route component={NotFound} />
		</Switch>
	);
};
export default Routes;
