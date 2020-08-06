import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import routes from '../routes';

import Main from './Main';
import Header from '../components/Header';
import NotFound from '../pages/NotFound';

function Layout() {
	return (
		<div className='flex h-screen bg-gray-50 dark:bg-gray-900'>
			<div className='flex flex-col flex-1 w-full'>
				<Header />
				<Main>
					<Switch>
						{routes.map((route, i) => {
							return route.component ? (
								<Route
									key={i}
									exact={true}
									path={route.path}
									component={route.component}
								/>
							) : null;
						})}

						<Route path='/not-found' component={NotFound} />
						<Redirect to='/not-found' />
					</Switch>
				</Main>
			</div>
		</div>
	);
}

export default Layout;
