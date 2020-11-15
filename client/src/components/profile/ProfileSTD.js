import React from 'react';
import PropTypes from 'prop-types';

const ProfileSTD = ({
  shortTermDebt: {
    creditLimit,
    bill,
    dueDate,
    minPayment,
    amountDue,
    rate,
    amountPaid,
    difference,
    notes,
  },
}) => (
  <div>
    <h3 className='text-dark'>{notes}</h3>

    <p>
      <strong>Credit Limit: </strong> {creditLimit}
    </p>
    <p>
      <strong>Bill: </strong> {bill}
    </p>
    <p>
      <strong>Due Date: </strong> {dueDate}
    </p>
    <p>
      <strong>Minimum Payment: </strong> {minPayment}
    </p>
    <p>
      <strong>Amount Due: </strong> {amountDue}
    </p>
    <p>
      <strong>Amount Paid: </strong> {amountPaid}
    </p>
    <p>
      <strong>Rate: </strong> {rate}
    </p>
    <p>
      <strong>Difference: </strong> {amountDue - amountPaid}
    </p>
    <p>
      <strong>Credit Usage: </strong> {(amountDue * 100) / creditLimit}%
    </p>
  </div>
);

ProfileSTD.propTypes = {
  shortTermDebt: PropTypes.object.isRequired,
};

export default ProfileSTD;
