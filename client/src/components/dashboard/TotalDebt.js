import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const TotalDebt = ({ shortTermDebt, monthlyExpense, otherExpense }) => {
  let stDebts = 0;
  let meDebts = 0;
  let oeDebts = 0;

  for (let i = 0; i < shortTermDebt.length; i++) {
    stDebts += shortTermDebt[i].amountDue;
  }
  console.log(stDebts);

  for (let i = 0; i < monthlyExpense.length; i++) {
    meDebts += monthlyExpense[i].amountDue;
  }

  for (let i = 0; i < otherExpense.length; i++) {
    oeDebts += otherExpense[i].amountDue;
  }

  const debts = stDebts + meDebts + oeDebts;

  console.log(debts);

  return (
    <Fragment>
      <h2 className='my-2'>Total Debt</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Total Debt</th>
          </tr>
        </thead>
        <tbody>{debts}</tbody>
      </table>
    </Fragment>
  );
};

TotalDebt.propTypes = {
  shortTermDebt: PropTypes.array.isRequired,
  monthlyExpense: PropTypes.array.isRequired,
  otherExpense: PropTypes.array.isRequired,
};

export default connect(null)(TotalDebt);
