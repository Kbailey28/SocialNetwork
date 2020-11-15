import React from 'react';
import PropTypes from 'prop-types';

const ProfileOE = ({
  otherExpense: { totalBill, bill, dueDate, amountDue, amountPaid, notes },
}) => (
  <div>
    <h3 className='text-dark'>{notes}</h3>

    <p>
      <strong>Total Bill: </strong> {totalBill}
    </p>
    <p>
      <strong>Bill: </strong> {bill}
    </p>
    <p>
      <strong>Due Date: </strong> {dueDate}
    </p>
    <p>
      <strong>Amount Due: </strong> {amountDue}
    </p>
    <p>
      <strong>Amount Paid: </strong> {amountPaid}
    </p>
    <p>
      <strong>Difference: </strong> {amountDue - amountPaid}
    </p>
  </div>
);

ProfileOE.propTypes = {
  otherExpense: PropTypes.object.isRequired,
};

export default ProfileOE;
