import React from 'react';
import { Form, Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { loginRequest, passwordInputChange } from '../actions/user';

const Login = ({
  error, logged, loginRequest, passwordInputValue, passwordInputChange, request,
}) => (
  <Grid verticalAlign="middle" style={{ height: '100vh', padding: '4px' }}>
    {logged && <Redirect to="/" />}
    <Grid.Row centered>
      <Grid.Column computer={4} mobile={16} textAlign="center">
        <Form onSubmit={loginRequest}>
          <Form.Input
            type="password"
            label="Podaj hasło"
            value={passwordInputValue}
            onChange={event => passwordInputChange(event.target.value)}
            error={error}
          />
          <Form.Button type="submit" loading={request}>Zaloguj</Form.Button>
        </Form>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

Login.propTypes = {
  error: PropTypes.bool.isRequired,
  logged: PropTypes.bool.isRequired,
  loginRequest: PropTypes.func.isRequired,
  passwordInputValue: PropTypes.string.isRequired,
  passwordInputChange: PropTypes.func.isRequired,
  request: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  error: state.user.error,
  logged: state.user.logged,
  passwordInputValue: state.user.passwordInputValue,
  request: state.user.request,
});

const mapDispatchToProps = {
  passwordInputChange,
  loginRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
