import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import ToDoData from './ToDoData';

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

    tempBuild() {
        let t1 = new ToDoData("Stop", 1, false);
        let t2 = new ToDoData("Drop", 2, false);
        let t3 = new ToDoData("Shut em down, open up shop", 3, false);
        let all = [t1,t2,t3];
        this.setState({
            todos : all
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

    componentDidMount() {
        this.tempBuild();
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