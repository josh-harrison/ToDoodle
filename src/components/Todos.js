import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import ToDoData from './ToDoData';
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

class Todos extends React.Component {
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
          if(action.actionType == 'remove' ) return;
          this.setState({
            todos: this.filter(action.todos)
          });
        });
    }

    filter(todos) {
        return _.filter(todos, function(o) {return o.isComplete == false;});
    }

    create(todo) {
        return (
        <Checkbox 
            key={todo.id}
            label={todo.toDoText} 
            style={styles.checkbox}
            onCheck={() => this.markCompleted(todo)} />   
        );
    }

    markCompleted(todo) {
        todo.isComplete = true;
        TodosStore.update(todo);
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