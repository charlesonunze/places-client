import React from 'react';
import UsersList from 'users/components/UsersList';
import HomeNavBar from 'components/HomeNavBar';

const UsersPage = () => {
	const USERS = [
		{ name: 'Charles Onunze', id: 'ewcmw', places: 3 },
		{ name: 'Charles Onunze2', id: 'ewcmq', places: 1 },
		{ name: 'Charles Onunze3', id: 'ewcmz', places: 2 }
	];

	return (
		<>
			<HomeNavBar />
			<UsersList users={USERS} />
		</>
	);
};

export default UsersPage;
