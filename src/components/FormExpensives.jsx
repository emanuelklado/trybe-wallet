import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { thunkGetAcronyms, thunkGetValueInputForm } from '../actions';

const arrayPaymentOptions = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const arrayCategoryOptions = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class FormExpensives extends Component {
  constructor() {
    super();

    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: arrayPaymentOptions[0],
      tag: arrayCategoryOptions[0],
    };
  }

  componentDidMount() {
    this.callThunkAcronyms();
  }

  callThunkAcronyms = async () => {
    const { dispatch } = this.props;
    await dispatch(thunkGetAcronyms());
  }

  handleChange = ({ target: { name, value, type, checked } }) => {
    const valor = type === 'checkbox' ? checked : value;
    this.setState({ [name]: valor });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    await dispatch(thunkGetValueInputForm(this.state));
    this.setState({
      value: 0,
      description: '',
      currency: 'USD',
      method: arrayPaymentOptions[0],
      tag: arrayCategoryOptions[0],
    });
  }

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input
            data-testid="value-input"
            type="text"
            id="value"
            name="value"
            value={ value }
            onChange={ (e) => this.handleChange(e) }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            data-testid="description-input"
            type="text"
            id="description"
            value={ description }
            name="description"
            onChange={ (e) => this.handleChange(e) }
          />
        </label>
        <label htmlFor="Moeda">
          Moeda
          <select
            data-testid="currency-input"
            id="Moeda"
            name="currency"
            value={ currency }
            onChange={ (e) => this.handleChange(e) }
          >
            { currencies.map((item, i) => <option key={ i }>{item}</option>)}
          </select>
        </label>
        <label htmlFor="paymentOptions">
          {'Método de pagamento: '}
          <select
            data-testid="method-input"
            id="paymentOptions"
            value={ method }
            name="method"
            onChange={ (e) => this.handleChange(e) }
          >
            {arrayPaymentOptions.map((item, i) => <option key={ i }>{item}</option>)}
          </select>
        </label>
        <label htmlFor="categoryOptions">
          {'Categorias: '}
          <select
            data-testid="tag-input"
            id="categoryOptions"
            value={ tag }
            name="tag"
            onChange={ (e) => this.handleChange(e) }
          >
            { arrayCategoryOptions.map((item, i) => <option key={ i }>{item}</option>)}
          </select>
        </label>
        <button
          onClick={ (e) => this.handleSubmit(e) }
          type="submit"
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

// const mapDispatchToProps = (dispatch) => ({
//   getCurrencies: () => dispatch(thunkGetAcronyms()),
// });

FormExpensives.propTypes = {
  currencies: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps, null)(FormExpensives);
