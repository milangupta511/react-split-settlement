import React, { Component } from 'react';

class NewExpense extends Component {
    render() {
        return (
            <div>
                <h2>Add Bill</h2>
                <form>
                    <label for="billMembers">With you and</label>
                    <input type="text" id="billMembers" />
                    <label for="description">Description</label>
                    <input type="text" id="description" />
                    <label for="amount">Amount</label>
                    <input type="number" id="Amount" />
                    <input type="submit" value="Save" />
                </form>
            </div>
        );
    }
}

export default NewExpense;