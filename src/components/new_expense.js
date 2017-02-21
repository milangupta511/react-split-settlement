import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {onChangeDescription,onChangeBillMember,onChangeAmount} from '../actions/index'

class NewExpense extends Component {
    constructor(props){
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }
    onFormSubmit(){
        event.preventDefault();
    }
    onInputChange(event){
        let actionHandler ='onChange' +  event.target.name[0].toUpperCase()+event.target.name.slice(1);
        this.props[actionHandler](event.target.value, event.target.name);
    }
    render() {
        let expenseForm = this.props.newExpenseForm;
        return (
            <div>
                <h2>Add Bill</h2>
                <form method="POST" onSubmit={this.onFormSubmit}>
                    <div>
                        <label htmlFor="billMember">With you and</label>
                        <input type="text" name="billMember" value={expenseForm.billMember} onChange={this.onInputChange}/>
                    </div>
                    <div>
                        <label htmlFor="description">Description</label>
                        <input type="text" name="description" value={expenseForm.description} onChange={this.onInputChange}/>
                    </div>
                    <div>
                        <label htmlFor="amount">Amount</label>
                        <input type="number" name="amount" value={expenseForm.amount} onChange={this.onInputChange}/>
                    </div>
                    <input type="submit" value="Save" />
                </form>
            </div>
        );
    }
}
function mapStateToProps({newExpenseForm}){
    return {
        newExpenseForm
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({onChangeDescription,onChangeBillMember,onChangeAmount}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(NewExpense);