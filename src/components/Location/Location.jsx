import { PropTypes } from 'prop-types';
import { GoogleMap, MarkerF } from '@react-google-maps/api';
import { useState, useCallback } from 'react';
import { containerStyle, defaulOptions, API_KEY } from 'services/helpers';

import Geocode from 'react-geocode';
Geocode.setApiKey(API_KEY);

const Location = ({ center, setAddress, setIsMarker, setCenter }) => {
  // eslint-disable-next-line no-unused-vars
  const [map, setMap] = useState(null);

  const onLoad = useCallback(
    function callback(map) {
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);

      setMap(map);
    },
    [center]
  );

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  const getAddress = loc => {
    setIsMarker(true);
    const lat = loc.latLng.lat();
    const lng = loc.latLng.lng();
    setCenter({ lat, lng });
    Geocode.fromLatLng(lat, lng).then(
      response => {
        const address = response.results[0].formatted_address;
        setAddress(address);
      },
      error => {
        console.error(error);
      }
    );
  };

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={4}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={defaulOptions}
      onDblClick={loc => getAddress(loc)}
    >
      <MarkerF position={center} />
    </GoogleMap>
  );
};
Location.propTypes = {
  center: PropTypes.object.isRequired,
  setAddress: PropTypes.func.isRequired,
  setIsMarker: PropTypes.func.isRequired,
  setCenter: PropTypes.func.isRequired,
};
export default Location;
