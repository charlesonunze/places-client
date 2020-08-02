import React from 'react';
import HomeNavBar from 'components/HomeNavBar';
import PlacesList from 'places/components/PlacesList';

const PlacesPage = () => {
	const PLACES = [
		{ name: 'Someplace', id: 'ewcmw' },
		{ name: 'Someplace 2', id: 'ewcmq' },
		{ name: 'Someplace 3', id: 'ewcmz' }
	];

	return (
		<>
			<HomeNavBar />
			<PlacesList places={PLACES} />
		</>
	);
};

export default PlacesPage;
