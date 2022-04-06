import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class TableExpenses extends Component {
  render() {
    const { expenses } = this.props;
    console.log(expenses);
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((item, i) => {
            const currencyName = item.exchangeRates[item.currency].name;
            const taxRate = +(item.exchangeRates[item.currency].ask);
            const convertedValue = +(item.value * taxRate).toFixed(2);
            const valueItem = (+item.value).toFixed(2);
            console.log(expenses);
            console.log(taxRate);
            console.log(convertedValue);
            console.log(valueItem);
            return (
              <tr key={ i }>
                <td>{item.description}</td>
                <td>{item.tag}</td>
                <td>{item.method}</td>
                <td>{valueItem}</td>
                <td>{currencyName.split('/')[0]}</td>
                <td>{taxRate.toFixed(2)}</td>
                <td>{convertedValue}</td>
                <td>Real</td>
                <td>
                  <button type="button">Editar</button>
                  <button type="button">Excluir</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

TableExpenses.propTypes = {
  expenses: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps)(TableExpenses);
