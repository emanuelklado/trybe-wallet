import React from 'react';
import FormExpensives from '../components/FormExpensives';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <FormExpensives />
      </>
    );
  }
}

export default Wallet;
