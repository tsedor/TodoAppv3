import React from 'react';
import { Form, Grid, Label } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import loginRequest from '../actions/user';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      passwordInputValue: '',
    };
    this.updatePasswordValue = this.updatePasswordValue.bind(this);
  }
  updatePasswordValue(e) {
    this.setState({
      passwordInputValue: e.target.value,
    });
  }
  render() {
    const {
      error, logged, loginRequest, request,
    } = this.props;
    return (
      <Grid verticalAlign="middle" style={{ height: '100vh', padding: '4px' }}>
        {logged && <Redirect to="/" />}
        <Grid.Row centered>
          <Grid.Column computer={4} mobile={16} textAlign="center">
            <Form onSubmit={() => loginRequest(this.state.passwordInputValue)}>
              <Form.Field error={error}>
                {error && <Label color="red" pointing="below" style={{ position: 'absolute', top: '-30px' }}>Błędne hasło</Label>}
                <input
                  type="password"
                  label="Podaj hasło"
                  value={this.state.passwordInputValue}
                  onChange={this.updatePasswordValue}
                />
              </Form.Field>
              <Form.Button type="submit" loading={request}>Zaloguj</Form.Button>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

Login.propTypes = {
  error: PropTypes.bool.isRequired,
  logged: PropTypes.bool.isRequired,
  loginRequest: PropTypes.func.isRequired,
  request: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  error: state.user.error,
  logged: state.user.logged,
  request: state.user.request,
});

const mapDispatchToProps = {
  loginRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
