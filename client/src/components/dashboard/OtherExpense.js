import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteOtherExpense } from '../../actions/profile';

const OtherExpense = ({ otherExpense, deleteOtherExpense }) => {
  const otherExpenses = otherExpense.map((oe) => (
    <tr key={oe._id}>
      <td>{oe.totalBill}</td>
      <td className='hide-sm'>{oe.bill}</td>
      <td className='hide-sm'>{oe.dueDate}</td>
      <td className='hide-sm'>{oe.amountDue}</td>
      <td className='hide-sm'>{oe.amountPaid}</td>
      <td className='hide-sm'>{oe.notes}</td>
      <td>
        <button
          onClick={() => deleteOtherExpense(oe._id)}
          className='btn btn-danger'
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className='my-2'>Other Expenses</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Total Bill</th>
            <th className='hide-sm'>Bill</th>
            <th className='hide-sm'>Due Date</th>
            <th className='hide-sm'>Amount Due</th>
            <th className='hide-sm'>Amount Paid</th>
            <th className='hide-sm'>Notes</th>
            <th />
          </tr>
        </thead>
        <tbody>{otherExpenses}</tbody>
      </table>
    </Fragment>
  );
};

OtherExpense.propTypes = {
  otherExpense: PropTypes.array.isRequired,
  deleteOtherExpense: PropTypes.func.isRequired,
};

export default connect(null, { deleteOtherExpense })(OtherExpense);
