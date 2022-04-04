import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { thunkGetAcronyms } from '../actions';

const arrayPaymentOptions = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const arrayCategoryOptions = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class FormExpensives extends Component {
  componentDidMount() {
    this.callThunk();
  }

  callThunk = async () => {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  render() {
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input data-testid="value-input" type="text" id="value" />
        </label>
        <label htmlFor="description">
          Descrição
          <input data-testid="description-input" type="text" id="description" />
        </label>
        <label htmlFor="Moeda">
          Moeda
          <select data-testid="currency-input" id="Moeda">
            { currencies.map((item, i) => <option key={ i }>{item}</option>)}
          </select>
        </label>
        <label htmlFor="paymentOptions">
          {'Método de pagamento: '}
          <select data-testid="method-input" id="paymentOptions">
            { arrayPaymentOptions.map((item, i) => <option key={ i }>{item}</option>)}
          </select>
        </label>
        <label htmlFor="categoryOptions">
          {'Categorias: '}
          <select data-testid="tag-input" id="categoryOptions">
            { arrayCategoryOptions.map((item, i) => <option key={ i }>{item}</option>)}
          </select>
        </label>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(thunkGetAcronyms()),
});

FormExpensives.propTypes = {
  getCurrencies: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(FormExpensives);
