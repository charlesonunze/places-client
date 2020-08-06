import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@windmill/react-ui';

import routes from '../routes';

const Header = () => {
	return (
		<nav className='flex items-center justify-between px-6 py-2 bg-gray-50 dark:bg-gray-800 shadow-lg'>
			<a className='text-gray-700 dark:text-gray-400' href='/'>
				<strong>PLACES</strong>
			</a>

			<ul className='flex space-x-4'>
				{routes.map(({ path, label }, index) => {
					return (
						<li key={index}>
							<NavLink to={path} key={index}>
								<Button layout='link'>{label}</Button>
							</NavLink>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default Header;
