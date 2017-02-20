import React, { Component } from 'react';

class NewGroup extends Component {
    render() {
        return (
            <div>
                <h2>Create a group</h2>
                <form>
                    <label for="groupName">Group Name</label>
                    <input type="text" />
                    <input type="submit" value="Save" />
                </form>
            </div>
        );
    }
}

export default NewGroup;