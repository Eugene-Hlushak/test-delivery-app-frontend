import { PropTypes } from 'prop-types';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import useOnclickOutside from 'react-cool-onclickoutside';
import {
  AddressInput,
  FormLabel,
  LabelTitle,
} from '../Autocomplete/Autocomplete.styled';

const Autocomplete = ({
  isLoaded,
  setAddress,
  setCenter,
  address,
  isMarker,
  setIsMarker,
}) => {
  const {
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    callbackName: 'YOUR_CALLBACK_NAME',
    requestOptions: {},
    debounce: 300,
  });
  const ref = useOnclickOutside(() => {
    clearSuggestions();
  });

  const handleInput = e => {
    if (isMarker) {
      setValue(address);
      return;
    }
    setValue(e.target.value);
    setAddress(e.target.value);
  };

  const handleSelect =
    ({ description }) =>
    () => {
      setValue(description, false);
      clearSuggestions();

      getGeocode({ address: description }).then(results => {
        const { lat, lng } = getLatLng(results[0]);
        setCenter({ lat, lng });
      });
    };

  const renderSuggestions = () =>
    data.map(suggestion => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <li key={place_id} onClick={handleSelect(suggestion)}>
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });

  const addressValueHandler = e => {
    setValue(e.currentTarget.value);
    setIsMarker(false);
  };

  return (
    <FormLabel ref={ref}>
      <LabelTitle>Address</LabelTitle>
      <AddressInput
        type="address"
        name="address"
        value={isMarker ? address : value}
        onChange={handleInput}
        onClick={addressValueHandler}
        placeholder="Where we shoud deliver your meal?"
      />

      {status === 'OK' && <ul>{renderSuggestions()}</ul>}
    </FormLabel>
  );
};
Autocomplete.propTypes = {
  isLoaded: PropTypes.bool.isRequired,
  setAddress: PropTypes.func.isRequired,
  setCenter: PropTypes.func.isRequired,
  address: PropTypes.any.isRequired,
  isMarker: PropTypes.bool.isRequired,
  setIsMarker: PropTypes.func.isRequired,
};
export default Autocomplete;
