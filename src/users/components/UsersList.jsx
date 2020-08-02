import React from 'react';
import UserCard from './UserCard';

const UsersList = ({ users }) => {
	return (
		<div>
			<ul>
				{users.map((user, index) => (
					<UserCard key={index} />
				))}
			</ul>
		</div>
	);
};

export default UsersList;
