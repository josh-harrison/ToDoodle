import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import ToDoData from './ToDoData';
import TodosStore from './TodosStore';

const styles = {
    block: {
        maxWidth: 250
    },
    checkbox: {
        marginBottom: 16
    }
};

class Todos extends React.Component {
    constructor() {
        super();
        this.state = { todos: [] };
    }

    componentDidMount() {
        TodosStore.getAll().then((data) => {
          console.log('get all', data);
          this.setState({
            todos: data.todos
          });
        });
        
        TodosStore.subscribe((action) => {
          this.setState({
            todos: action.todos
          });
        });
    }

    create(todo) {
        return (
        <Checkbox 
            key={todo.id}
            label={todo.toDoText} 
            style={styles.checkbox} />   
        );
    }

    render() {
        const todos = this.state.todos.map(this.create.bind(this));
        return(
            <div style={styles.block}>
                <h3>ToDos</h3>
                <List>
                    {todos}
                </List>
            </div>
        );
    }
}

export default Todos;