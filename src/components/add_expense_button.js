import React, { Component } from 'react';
import { Link } from 'react-router'

class AddExpense extends Component {
    render() {
        return (
            <Link to="/newExpense" />
        );
    }
}

export default AddExpense;