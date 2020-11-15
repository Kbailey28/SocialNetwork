import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';
import ProfileSTD from './ProfileSTD';
import ProfileME from './ProfileME';
import ProfileOE from './ProfileOE';
import ProfileTD from './ProfileTD';
import { getProfileById } from '../../actions/profile';

const Profile = ({
  getProfileById,
  profile: { profile, loading },
  auth: { isAdmin },
  match,
}) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);

  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <Link to='/profiles' className='btn btn-light'>
            Back to Clients
          </Link>
          {isAdmin === true && (
            <Link to='/edit-profile' className='btn btn-dark'>
              Edit Client
            </Link>
          )}
          <div className='profile-grid my-1'>
            <ProfileTop profile={profile} />
            <ProfileAbout profile={profile} />
            <div className='profile-exp bg-white p-2'>
              <h2 className='text-primary'>Short Term Debt</h2>
              {profile.shortTermDebt.length > 0 ? (
                <Fragment>
                  {profile.shortTermDebt.map((shortTermDebt) => (
                    <ProfileSTD
                      key={shortTermDebt._id}
                      shortTermDebt={shortTermDebt}
                    />
                  ))}
                </Fragment>
              ) : (
                <h4>No Short Term Debts</h4>
              )}
            </div>

            <div className='profile-edu bg-white p-2'>
              <h2 className='text-primary'>Monthly Expense</h2>
              {profile.monthlyExpense.length > 0 ? (
                <Fragment>
                  {profile.monthlyExpense.map((monthlyExpense) => (
                    <ProfileME
                      key={monthlyExpense._id}
                      monthlyExpense={monthlyExpense}
                    />
                  ))}
                </Fragment>
              ) : (
                <h4>No Monthly Expenses</h4>
              )}
            </div>

            <div className='profile-github bg-white p-2'>
              <h2 className='text-primary'>Other Expenses</h2>
              {profile.otherExpense.length > 0 ? (
                <Fragment>
                  {profile.otherExpense.map((otherExpense) => (
                    <ProfileOE
                      key={otherExpense._id}
                      otherExpense={otherExpense}
                    />
                  ))}
                </Fragment>
              ) : (
                <h4>No Other Expenses</h4>
              )}
            </div>
            <div>
              <ProfileTD
                shortTermDebt={profile.shortTermDebt}
                monthlyExpense={profile.monthlyExpense}
                otherExpense={profile.otherExpense}
              />
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfileById })(Profile);
