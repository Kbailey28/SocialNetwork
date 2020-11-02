import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteMonthlyExpense } from '../../actions/profile';

const MonthlyExpense = ({ monthlyExpense, deleteMonthlyExpense }) => {
  const monthlyExpenses = monthlyExpense.map((me) => (
    <tr key={me._id}>
      <td>{me.totalBill}</td>
      <td className='hide-sm'>{me.bill}</td>
      <td className='hide-sm'>{me.dueDate}</td>
      <td className='hide-sm'>{me.amountDue}</td>
      <td className='hide-sm'>{me.amountPaid}</td>
      <td className='hide-sm'>{me.notes}</td>
      <td>
        <button
          onClick={() => deleteMonthlyExpense(me._id)}
          className='btn btn-danger'
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className='my-2'>Monthly Expenses</h2>
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
        <tbody>{monthlyExpenses}</tbody>
      </table>
    </Fragment>
  );
};

MonthlyExpense.propTypes = {
  monthlyExpense: PropTypes.array.isRequired,
  deleteMonthlyExpense: PropTypes.func.isRequired,
};

export default connect(null, { deleteMonthlyExpense })(MonthlyExpense);
