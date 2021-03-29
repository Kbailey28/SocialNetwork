import axios from 'axios';
import { setAlert } from './alert';

//Register quiz email
export const quiz = ({ email }) => async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    const body = JSON.stringify({ email});
  
    try {
      const res = await axios.post('/api/quiz', body, config);
      dispatch(setAlert('Please check your email', 'success'));
  
    } catch (err) {
      const errors = err.response.data.errors;
  
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
      }
  
    }
  };