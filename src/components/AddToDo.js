import React from 'react';
import TextField from 'material-ui/TextField';

import Store from './Store';

const RETURN_KEY_CODE = 13;

class AddToDo extends React.Component {

    handleOnKeyDown(event) {
        if (event.keyCode === RETURN_KEY_CODE) {
            let todoVal = event.target.value.trim();
            if (todoVal == '') {
                return;
            }
            Store.add(todoVal);
            
            event.target.value = '';
        }
    }
    
    render() {
        return (
            <TextField 
                onKeyDown={this.handleOnKeyDown} 
                floatingLabelText="Enter new task"
            />
        );
    }
}

export default AddToDo;