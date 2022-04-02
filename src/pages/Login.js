import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionLogin } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisabled: true,
      email: '',
      password: '',
    };
  }

    // função generica usada no trybe tunes.
    handleInputChange = ({ target: { name, value, type, checked } }) => {
      const valor = type === 'checkbox' ? checked : value;
      this.setState({ [name]: valor }, () => this.validation());
    };

    validation = () => {
      const MAX = 6;
      const { password, email } = this.state;
      const emailRegex = /\S+@\S+\.\S+/;
      if (password.length >= MAX && emailRegex.test(email)) {
        this.setState({ isDisabled: false });
      } else {
        this.setState({ isDisabled: true });
      }
    };

    handleButtonSubmit = (e) => {
      const { emailValueDispatch, history } = this.props;
      const { email } = this.state;
      e.preventDefault();
      emailValueDispatch(email);
      history.push('/carteira');
    }

    render() {
      const { isDisabled, password, email } = this.state;
      return (
        <main>
          <h2>Login</h2>
          <div>
            <form>
              <input
                name="email"
                type="email"
                value={ email }
                data-testid="email-input"
                onChange={ this.handleInputChange }
                required
              />
              <input
                name="password"
                type="password"
                value={ password }
                data-testid="password-input"
                onChange={ this.handleInputChange }
                required
              />
              <button
                type="submit"
                disabled={ isDisabled }
                onClick={ this.handleButtonSubmit }
              >
                Entrar
              </button>
            </form>
          </div>
        </main>
      );
    }
}

const mapDispatchToProps = (dispatch) => ({
  emailValueDispatch: (e) => dispatch(actionLogin(e)),
});

Login.propTypes = {
  emailValueDispatch: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
