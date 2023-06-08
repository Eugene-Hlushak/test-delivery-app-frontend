import { PropTypes } from 'prop-types';
import { Formik, ErrorMessage, Form } from 'formik';
import { object, string, number } from 'yup';
import Autocomplete from 'components/Autocomplete/Autocomplete';
import { useState } from 'react';
import Location from 'components/Location/Location';
import {
  CustomerForm,
  FormInput,
  FormLabel,
  LabelTitle,
  TotalPrice,
  Submit,
  Box,
} from './OrderForm.styled';
import { sendOrder } from '../../services/fetch';

const OrderForm = ({
  order,
  totalPrice,
  setOrder,
  isLoaded,
  setCenter,
  center,
  isMarker,
  setIsMarker,
}) => {
  const [address, setAddress] = useState('');

  const formInitialValues = {
    name: '',
    email: '',
    phone: '',
  };

  const validationSchema = object({
    name: string().required(),
    email: string().email().required(),
    phone: number().required(),
  });

  const submitOrder = async (values, { resetForm }) => {
    if (!address) {
      alert('address!');
      return;
    }
    const completedOrder = {
      customer: { ...values, address },
      order: [...order],
      totalPrice,
    };

    sendOrder(completedOrder);
    setOrder([]);
    resetForm();
  };

  return (
    <CustomerForm>
      {isLoaded && (
        <Location
          center={center}
          setAddress={setAddress}
          setIsMarker={setIsMarker}
          setCenter={setCenter}
        />
      )}
      <Autocomplete
        isLoaded={isLoaded}
        setAddress={setAddress}
        setCenter={setCenter}
        address={address}
        isMarker={isMarker}
        setIsMarker={setIsMarker}
      />
      <Formik
        initialValues={formInitialValues}
        validationSchema={validationSchema}
        onSubmit={submitOrder}
      >
        <Form>
          <FormLabel>
            <LabelTitle>Name</LabelTitle>
            <FormInput type="text" name="name" />
            <ErrorMessage name="name" />
          </FormLabel>

          <FormLabel>
            <LabelTitle>Phone</LabelTitle>
            <FormInput type="tel" name="phone" />
            <ErrorMessage name="phone" />
          </FormLabel>
          <FormLabel>
            <LabelTitle>Email</LabelTitle>
            <FormInput type="email" name="email" />
            <ErrorMessage name="email" />
          </FormLabel>
          <Box>
            <TotalPrice>Total Price: {totalPrice}</TotalPrice>
            <Submit type="submit" disabled={totalPrice === 0}>
              Send order
            </Submit>
          </Box>
        </Form>
      </Formik>
    </CustomerForm>
  );
};

OrderForm.propTypes = {
  order: PropTypes.array.isRequired,
  totalPrice: PropTypes.number.isRequired,
  setOrder: PropTypes.func.isRequired,
  isLoaded: PropTypes.bool.isRequired,
  setCenter: PropTypes.func.isRequired,
  center: PropTypes.object.isRequired,
  isMarker: PropTypes.bool.isRequired,
  setIsMarker: PropTypes.func.isRequired,
};
export default OrderForm;
