import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addShortTermDebt } from '../../actions/profile';

const AddShortTermDebt = ({ addShortTermDebt, history }) => {
  const [formData, setFormData] = useState({
    creditLimit: '',
    bill: '',
    dueDate: '',
    minPayment: '',
    amountDue: '',
    rate: '',
    amountPaid: '',
    difference: '',
    creditUsage: '',
    notes: '',
  });

  const {
    creditLimit,
    bill,
    dueDate,
    minPayment,
    amountDue,
    rate,
    amountPaid,
    difference,
    creditUsage,
    notes,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <h1 className='large text-primary'>Add a Short Term Debt</h1>
      <p className='lead'>
        <i className='fas fa-code-branch'></i> Add any unsettled short term
        debts.
      </p>
      <small>* = required field</small>
      <form
        className='form'
        onSubmit={(e) => {
          e.preventDefault();
          addShortTermDebt(formData, history);
          console.log('added');
        }}
      >
        <div className='form-group'>
          <input
            type='text'
            placeholder='Credit Limit'
            name='creditLimit'
            value={creditLimit}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* bill'
            name='bill'
            value={bill}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Due Date'
            name='dueDate'
            value={dueDate}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Minimum Payment'
            name='minPayment'
            value={minPayment}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Amount Due'
            name='amountDue'
            value={amountDue}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='interest rate'
            name='rate'
            value={rate}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Amount Paid'
            name='amountPaid'
            value={amountPaid}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='difference'
            name='difference'
            value={difference}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Credit Usage'
            name='creditUsage'
            value={creditUsage}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='notes'
            name='notes'
            value={notes}
            onChange={(e) => onChange(e)}
          />
        </div>
        <input type='submit' className='btn btn-primary my-1' />
        <a className='btn btn-light my-1' href='dashboard.html'>
          Go Back
        </a>
      </form>
    </Fragment>
  );
};

AddShortTermDebt.propTypes = {
  addShortTermDebt: PropTypes.func.isRequired,
};

export default connect(null, { addShortTermDebt })(AddShortTermDebt);
