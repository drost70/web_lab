import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import OrderConfirmationPage from './OrderConfirmationPage';

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string().email('Invalid email address').matches(/\.[a-zA-Z]{2,}$/, 'Invalid email address').required('Email is required'),
  phone: Yup.string().matches(/^\+?\d*$/, 'Invalid phone number').required('Phone is required'),
  address: Yup.string().required('Address is required'),
});

const CheckoutPage = () => {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    console.log('Form values:', values);
    setOrderPlaced(true);
    dispatch({ type: 'CLEAR_CART' });
  };

  if (orderPlaced) {
    return <OrderConfirmationPage />;
  }

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          address: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="form-group-first">
            <div>
              <label htmlFor="firstName">First Name</label>
              <Field type="text" id="firstName" name="firstName" />
              <ErrorMessage name="firstName" component="div" />
            </div>

            <div>
              <label htmlFor="lastName">Last Name</label>
              <Field type="text" id="lastName" name="lastName" />
              <ErrorMessage name="lastName" component="div" />
            </div>
          </div>
          <div className="form-group-column">
            <div>
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" />
            </div>

            <div>
              <label htmlFor="phone">Phone</label>
              <Field type="tel" id="phone" name="phone" />
              <ErrorMessage name="phone" component="div" />
            </div>
          </div>
          <div className="form-group-wide">
            <div>
              <label htmlFor="address">Address</label>
              <Field type="text" id="address" name="address" />
              <ErrorMessage name="address" component="div" />
            </div>
          </div>
          <div className="form-buttons">
            <button type="button" onClick={() => navigate('/cart')}>
              Back to Cart
            </button>
            <button type="submit">Place Order</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default CheckoutPage;
