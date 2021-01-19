import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteShortTermDebt } from '../../actions/profile';

const ShortTermDebt = ({ shortTermDebt, deleteShortTermDebt }) => {
  const shortTermDebts = shortTermDebt.map((std) => (
    <tr key={std._id}>
      <td>{std.creditLimit}</td>
      <td className='hide-sm text-red'>{std.bill}</td>
      <td className='hide-sm'>{std.dueDate}</td>
      <td className='hide-sm'>{std.minPayment}</td>
      <td className='hide-sm'>{std.amountDue}</td>
      <td className='hide-sm'>{std.rate}</td>
      <td className='hide-sm text-primary'>{std.amountPaid}</td>
      <td className='hide-sm'>{std.difference}</td>
      <td className='hide-sm'>{std.notes}</td>
      <td>
        <button
          onClick={() => deleteShortTermDebt(std._id)}
          className='btn btn-danger'
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className='my-2'>Short Term Debts</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Credit Limit</th>
            <th className='hide-sm text-red'>Bill</th>
            <th className='hide-sm'>Due Date</th>
            <th className='hide-sm'>Minimum Payment</th>
            <th className='hide-sm'>Amount Due</th>
            <th className='hide-sm'>Rate</th>
            <th className='hide-sm text-primary'>Amount Paid</th>
            <th className='hide-sm'>Difference</th>
            <th className='hide-sm text-gold'>Notes</th>
            <th />
          </tr>
        </thead>
        <tbody>{shortTermDebts}</tbody>
      </table>
    </Fragment>
  );
};

ShortTermDebt.propTypes = {
  shortTermDebt: PropTypes.array.isRequired,
  deleteShortTermDebt: PropTypes.func.isRequired,
};

export default connect(null, { deleteShortTermDebt })(ShortTermDebt);
