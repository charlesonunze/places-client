import React from 'react';
import UsersList from '../components/UsersList';

const UsersPage = () => {
	const USERS = [
		{ name: 'Charles Onunze', id: 'ewcmw', places: 3 },
		{ name: 'Charles Onunze2', id: 'ewcmq', places: 1 },
		{ name: 'Charles Onunze3', id: 'ewcmz', places: 2 },
		{ name: 'Charles Onunze4', id: 'exxmz', places: 2 }
	];

	return (
		<>
			<h2 className='my-4 text-lg font-semibold text-gray-600 dark:text-gray-300'>
				Users
			</h2>
			<UsersList users={USERS} />
		</>
	);
};

export default UsersPage;
