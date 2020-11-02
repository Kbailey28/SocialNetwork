import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteShortTermDebt } from '../../actions/profile';

const ShortTermDebt = ({ shortTermDebt, deleteShortTermDebt }) => {
  const shortTermDebts = shortTermDebt.map((std) => (
    <tr key={std._id}>
      <td>{std.creditLimit}</td>
      <td className='hide-sm'>{std.bill}</td>
      <td className='hide-sm'>{std.dueDate}</td>
      <td className='hide-sm'>{std.minPayment}</td>
      <td className='hide-sm'>{std.amountDue}</td>
      <td className='hide-sm'>{std.amountPaid}</td>
      <td className='hide-sm'>{std.difference}</td>
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
            <th className='hide-sm'>Bill</th>
            <th className='hide-sm'>Due Date</th>
            <th className='hide-sm'>Minimum Payment</th>
            <th className='hide-sm'>Amount Due</th>
            <th className='hide-sm'>Amount Paid</th>
            <th className='hide-sm'>Difference</th>
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
