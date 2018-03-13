import Todos from './Todos';
import Completed from './Completed';
import React from 'react';

class AllTodos extends React.Component {
    render() {
        return(
            <div>
                <Todos />
                <Completed />
            </div>
        );
    }
}

export default AllTodos;