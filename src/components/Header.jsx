import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  sumExpenses = (expenses) => {
    let total = 0;
    expenses.forEach(({ value, currency, exchangeRates }) => {
      const exchangeRate = exchangeRates[currency].ask;
      const convertedValue = (+value * +exchangeRate);
      total += convertedValue;
    });

    return total.toFixed(2);
  }

  render() {
    const { email, expenses } = this.props;
    return (
      <header>
        <h1>Trybe Wallet</h1>
        <section>
          <p data-testid="email-field">
            Usuário:
            {email}
          </p>
        </section>
        <section>
          {' '}
          {'Total:'}
          <p data-testid="total-field">
            {this.sumExpenses(expenses)}
          </p>
        </section>
        <section>
          <p data-testid="header-currency-field">BRL</p>
        </section>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string,
  expenses: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default connect(mapStateToProps)(Header);
