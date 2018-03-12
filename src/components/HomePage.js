import React from 'react';
import {Link} from 'react-router';
import TextField from 'material-ui/TextField';
import Todos from './Todos';
import Completed from './Completed';
import AddTodo from './AddToDo';


class HomePage extends React.Component {
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
}

export default HomePage;
