import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import classes from './LoginView.scss';


const LoginView = ({ fields, submitting, handleSubmit, invalidLogin }) => {
  const { email, password } = fields;
  return (
    <form onSubmit={handleSubmit} className={classes.loginView}>
      <div className="container">
        <div className="form-signin">
          <h2 className="form-signin-heading">Please sign in</h2>
          <label htmlFor="inputEmail" className="sr-only">Email address</label>
          <input {...email} type="email" id="inputEmail" className="form-control" placeholder="Email address" />
          {email.touched && email.error && <span>{email.error}</span>}
          <label htmlFor="inputPassword" className="sr-only">Password</label>
          <input {...password} type="password" id="inputPassword" className="form-control" placeholder="Password" />

          {password.touched && password.error && <span>{password.error}</span>}

          <div className="checkbox">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button disabled={submitting} className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
          {invalidLogin && <p>Invalid credentials</p>}
        </div>
      </div>
    </form>
  );
};

LoginView.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  invalidLogin: PropTypes.bool.isRequired,
};

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'invalid email';
  }
  if (!values.password) {
    errors.password = 'required';
  }
  return errors;
};
const fields = ['email', 'password'];
export default reduxForm({ form: 'login', fields, validate })(LoginView);

