import React, {Component} from 'react';
import Header from './header';
import AddExpenseButton from './add_expense_button';
export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <AddExpenseButton />
        {this.props.children}
      </div>
    );
  }
}
