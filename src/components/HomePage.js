import React from 'react';
import {Link} from 'react-router';
import TextField from 'material-ui/TextField';
import Todos from './Todos';
import Completed from './Completed';


class HomePage extends React.Component {
    render() {
        return(
            <div className="jumbotron">
                <h1>ToDoodle</h1>
                <TextField
                    floatingLabelText="Enter ToDo"
                />
                <hr />
                <Todos />
                <hr />
                <Completed />
            </div>
        );
    }
}

export default HomePage;
