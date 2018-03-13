import React from 'react';
import {Link} from 'react-router';
import TextField from 'material-ui/TextField';
import AddTodo from './AddToDo';
import Store from './Store';
import AllTodos from './AllTodos';


class HomePage extends React.Component {
    constructor() {
        super();
        this.state = { workFlowVisible: false };
    }

    render() {
        return(
            <div className="jumbotron" id="jumbo">
                <AddTodo />
                {this.state.workFlowVisible ? <AllTodos /> : null}
            </div>
        );
    }

    componentDidMount() {
        this.getTodos();
        
        Store.subscribe((action) => {
          if(action.actionType == 'update' ) return;
          this.getTodos();
        });
    }

    getTodos() {
        Store.getAll().then((data) => {
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
