import React from 'react';
import UserCard from './UserCard';

const UsersList = ({ users }) => {
	return (
		<div className='flex h-screen bg-gray-50 dark:bg-gray-900'>
			<div className='flex flex-col flex-1 w-full'>
				<div className='grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4'>
					{users.map((user, index) => (
						<UserCard key={index} name={user.name} places={user.places} />
					))}
				</div>
			</div>
		</div>
	);
};

export default UsersList;
