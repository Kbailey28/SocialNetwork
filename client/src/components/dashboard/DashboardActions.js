import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
  return (
    <div className='dash-buttons'>
      <Link to='/edit-profile' className='btn btn-light'>
        <i className='fas fa-user-circle text-primary' /> Edit Profile
      </Link>
      <Link to='/addShortTermDebt' className='btn btn-light'>
        <i className='fas fa-dollar-sign text-primary' /> Add Short Term Debt
      </Link>
      <Link to='/addMonthlyExpense' className='btn btn-light'>
        <i className='fas fa-dollar-sign text-primary' /> Add Monthly Expense
      </Link>
      <Link to='/addOtherExpense' className='btn btn-light'>
        <i className='fas fa-dollar-sign text-primary' /> Add Other Expense
      </Link>
      <Link to='/math' className='btn btn-light'>
        <i className='fas fa-dollar-sign text-primary' /> Math
      </Link>
    </div>
  );
};

export default DashboardActions;
