import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import Model from './ToDoData';
import TodosStore from './TodosStore';
import _ from 'lodash';

const styles = {
    block: {
        maxWidth: 250
    },
    checkbox: {
        marginBottom: 16
    }
};

class Completed extends React.Component {
    constructor() {
        super();
        this.state = { todos: [] };
    }

    componentDidMount() {
        TodosStore.getAll().then((data) => {
          this.setState({
            todos: this.filter(data.todos)
          });
        });
        
        TodosStore.subscribe((action) => {
          this.setState({
            todos: this.filter(action.todos)
          });
        });
    }

    filter(todos) {
        return _.filter(todos, function(o) {return o.isComplete == true;});
    }

    create(todo) {
        return(
            <ListItem 
                key={todo.id}
                rightIconButton={<IconButton><DeleteIcon /></IconButton>}
            >
                <Checkbox
                    label={todo.toDoText}
                    checked={todo.isComplete}
                />
            </ListItem>
        );
    }

    render() {
        const todos = this.state.todos.map(this.create.bind(this));
        return(
        <div style={styles.block}>
            <h3>Completed</h3>
            <List>
                {todos}
            </List>
        </div>
        );
    }
}

export default Completed;