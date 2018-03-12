import React from 'react';
import {Link} from 'react-router';
import TextField from 'material-ui/TextField';
import Todos from './Todos';
import Completed from './Completed';
import AddTodo from './AddToDo';
import TodosStore from './TodosStore';


class HomePage extends React.Component {
    constructor() {
        super();
        this.state = { workFlowVisible: false };
    }

    render() {
        return(
            <div className="jumbotron">
                <AddTodo />
                <hr />
                <Todos />
                <hr />
                <Completed />
            </div>
        );
    }

    componentDidMount() {
        this.getTodos();
        
        TodosStore.subscribe((action) => {
          if(action.actionType == 'update' ) return;
          this.getTodos();
        });
    }

    getTodos() {
        TodosStore.getAll().then((data) => {
            if(data.todos.length > 0) {
                this.setState({
                    workFlowVisible: true
                });
            } else {
                this.setState({
                    workFlowVisible: false
                });
            }
        });
    }
}

export default HomePage;
