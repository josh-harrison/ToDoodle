import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import Model from './ToDoData';
import Store from './Store';
import _ from 'lodash';

const styles = {
    block: {
        maxWidth: 400
    }
};

class Completed extends React.Component {
    constructor() {
        super();
        this.state = { todos: [] };
    }

    render() {
        const todos = this.state.todos.map(this.create.bind(this));
        return(
        <div style={styles.block}>
            <h2>Completed</h2>
            <List>
                {todos}
            </List>
        </div>
        );
    }

    componentDidMount() {
        Store.getAll().then((data) => {
          this.setState({
            todos: this.filter(data.todos)
          });
        });
        
        Store.subscribe((action) => {
          this.setState({
            todos: this.filter(action.todos)
          });
        });
    }

    create(todo) {
        return(
            <ListItem 
                key={todo.id}
                style={{paddingLeft: '0px', fontSize: '14px'}}
                rightIconButton={<IconButton onClick={() => this.delete(todo)}><DeleteIcon /></IconButton>}
            >
                <Checkbox
                    id={`todo-${todo.id}`}
                    label={todo.toDoText}
                    checked={todo.isComplete}
                    onClick={() => this.unCheck(todo)}
                />
            </ListItem>
        );
    }

    filter(todos) {
        return _.filter(todos, function(o) {return o.isComplete == true;});
    }

    delete(todo) {
        Store.remove(todo);
    }

    unCheck(todo) {
        setTimeout(() => {
            todo.isComplete = false;
            Store.update(todo);
        },500);
    }
}

export default Completed;