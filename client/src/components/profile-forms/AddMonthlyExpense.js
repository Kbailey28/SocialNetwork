import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addMonthlyExpense } from '../../actions/profile';

const AddMonthlyExpense = ({ addMonthlyExpense, history }) => {
  const [formData, setFormData] = useState({
    totalBill: '',
    bill: '',
    dueDate: '',
    amountDue: '',
    amountPaid: '',
    notes: '',
  });

  const { totalBill, bill, dueDate, amountDue, amountPaid, notes } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <h1 className='large text-primary'>Add a Monthly Expense</h1>
      <p className='lead'>
        <i className='fas fa-code-branch'></i> Add any Monthly Expenses
      </p>
      <small>* = required field</small>
      <form
        className='form'
        onSubmit={(e) => {
          e.preventDefault();
          addMonthlyExpense(formData, history);
          console.log('added');
        }}
      >
        <div className='form-group'>
          <input
            type='text'
            placeholder='Total Bill'
            name='totalBill'
            value={totalBill}
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
            placeholder='* Amount Due'
            name='amountDue'
            value={amountDue}
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

AddMonthlyExpense.propTypes = {
  addMonthlyExpense: PropTypes.func.isRequired,
};

export default connect(null, { addMonthlyExpense })(AddMonthlyExpense);
