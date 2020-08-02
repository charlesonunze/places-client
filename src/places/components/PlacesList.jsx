import React from 'react';
import PlacesCard from './PlacesCard';

const PlacesList = ({ places }) => {
	return (
		<div>
			<ul>
				{places.map((user, index) => (
					<PlacesCard key={index} />
				))}
			</ul>
		</div>
	);
};

export default PlacesList;
