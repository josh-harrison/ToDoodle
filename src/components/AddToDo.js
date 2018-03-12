import React from 'react';
import TextField from 'material-ui/TextField';

import TodosStore from './TodosStore';

const RETURN_KEY_CODE = 13;

class AddToDo extends React.Component {

    handleOnKeyDown(event) {
        if (event.keyCode === RETURN_KEY_CODE) {
            let todoVal = event.target.value.trim();
            if (todoVal == '') {
                return;
            }
            TodosStore.add(todoVal);
            
            event.target.value = '';
        }
    }
    
    render() {
        return (
            <TextField 
                onKeyDown={this.handleOnKeyDown} 
                floatingLabelText="Enter ToDo"
            />
        );
    }
}

export default AddToDo;