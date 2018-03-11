import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import Model from './ToDoData';

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
        this.tempBuild();
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

    tempBuild() {
        let t1 = new Model("Test 1", 1, true);
        let t2 = new Model("Test 2", 2, true);
        let all = [t1,t2];
        this.setState({
            todos : all
        });
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