import React from 'react';
import FormExpensives from '../components/FormExpensives';
import Header from '../components/Header';
import TableExpenses from '../components/TableExpenses';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <FormExpensives />
        <TableExpenses />
      </>
    );
  }
}

export default Wallet;
