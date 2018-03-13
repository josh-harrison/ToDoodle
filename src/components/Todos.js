import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import ToDoData from './ToDoData';
import Store from './Store';
import _ from 'lodash';


const styles = {
    block: {
        maxWidth: 500
    },
    checkbox: {
        marginBottom: 16,
        marginLeft: 13
    }
};

class Todos extends React.Component {
    constructor() {
        super();
        this.state = { todos: [] };
    }

    render() {
        const todos = this.state.todos.map(this.create.bind(this));
        return(
            <div style={styles.block}>
                <h2>To do list</h2>
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
        <div>
            <span style={{fontWeight:'normal',fontStyle:'italic',fontSize:'10px'}}>{todo.timestamp}</span>
            <Checkbox 
                key={todo.id}
                label={todo.toDoText} 
                style={styles.checkbox}
                onCheck={() => this.markCompleted(todo)} /> 
        </div> 
        );
    }

    markCompleted(todo) {
        setTimeout(() => {
            todo.isComplete = true;
            Store.update(todo);
        }, 500);
    }
}

export default Todos;