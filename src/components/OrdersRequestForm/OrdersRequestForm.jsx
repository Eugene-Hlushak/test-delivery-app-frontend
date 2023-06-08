import { PropTypes } from 'prop-types';
import { Formik, ErrorMessage, Form } from 'formik';
import { object, string, number } from 'yup';
import { getOrders } from '../../services/fetch';
import {
  CustomerForm,
  FormInput,
  FormLabel,
  LabelTitle,
  Submit,
  Box,
} from './OrdersRequestForm.styled';

const OrdersRequestForm = ({ setOrders }) => {
  const formInitialValues = {
    email: '',
    phone: '',
  };

  const validationSchema = object({
    email: string().email().required(),
    phone: number().required(),
  });

  const submitOrder = async (values, { resetForm }) => {
    console.log('Hello');
    const orders = await getOrders(values);
    const userOrders = orders.filter(
      order => order.customer.email === values.email
    );

    setOrders(userOrders);
    resetForm();
  };

  return (
    <CustomerForm>
      <Formik
        initialValues={formInitialValues}
        validationSchema={validationSchema}
        onSubmit={submitOrder}
      >
        <Form>
          <FormLabel>
            <LabelTitle>Email</LabelTitle>
            <FormInput type="email" name="email" />
            <ErrorMessage name="email" />
          </FormLabel>
          <FormLabel>
            <LabelTitle>Phone</LabelTitle>
            <FormInput type="tel" name="phone" />
            <ErrorMessage name="phone" />
          </FormLabel>
          <Box>
            <Submit type="submit">Get orders</Submit>
          </Box>
        </Form>
      </Formik>
    </CustomerForm>
  );
};

OrdersRequestForm.propTypes = {
  setOrders: PropTypes.func.isRequired,
};

export default OrdersRequestForm;
