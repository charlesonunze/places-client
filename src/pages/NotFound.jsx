import React from 'react';
import HomeNavBar from '../components/HomeNavBar';

const NotFound = () => {
	return (
		<>
			<HomeNavBar />

			<div className='text-center p-4'>
				<h1>404</h1>
				<h2>Page not found.</h2>
			</div>
		</>
	);
};

export default NotFound;
