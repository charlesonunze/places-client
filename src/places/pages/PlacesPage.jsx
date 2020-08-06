import React from 'react';
import PlacesList from '../components/PlacesList';

const PlacesPage = () => {
	const PLACES = [
		{ name: 'Someplace', id: 'ewcmw' },
		{ name: 'Someplace 2', id: 'ewcmq' },
		{ name: 'Someplace 3', id: 'ewcmz' }
	];

	return (
		<>
			<PlacesList places={PLACES} />
		</>
	);
};

export default PlacesPage;
