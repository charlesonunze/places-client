import React from 'react';
import { Card, CardBody, Avatar } from '@windmill/react-ui';

const UserCard = ({ name, places }) => {
	return (
		<a href='/'>
			<Card className='hover:bg-gray-100'>
				<CardBody className='flex items-center'>
					<Avatar
						size='large'
						src='https://windmillui.com/img/avatar-1.jpg'
						alt='Judith'
					/>
					<div>
						<p className='mt-2 ml-2 text-sm font-semibold text-gray-600 dark:text-gray-400'>
							{name}
						</p>
						<p className='ml-2 text-sm font-medium text-gray-700 dark:text-gray-200'>
							{places > 1 ? 'Places' : 'Place'} {places}
						</p>
					</div>
				</CardBody>
			</Card>
		</a>
	);
};

export default UserCard;
