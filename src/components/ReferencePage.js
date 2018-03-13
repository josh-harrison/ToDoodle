import React from 'react';

class ReferencePage extends React.Component {
    render() {
        return(
            <div>
                <h2>Reference</h2>
                <p>
                    I built this app with React JS and Material-UI for the front end, and the Express 
                    framework for Node.js for the web api logic. I've not used any of these technologies before
                    so used the following for reference.
                </p>
                <ul>
                    <li>
                        <p>Basic architecture for this app was borrowed from the Pluralsight course&nbsp;
                        <a href="https://app.pluralsight.com/library/courses/react-redux-react-router-es6/table-of-contents">
                            Building Applications with React and Redux in ES6.
                        </a>
                        </p>
                    </li>
                    <li>
                    <p>
                        I also borrowed and modified some code from this&nbsp;
                        <a href="https://github.com/Microsoft/vscode-react-sample">
                        react sample. 
                        </a>
                        &nbsp;Mostly for the Express api logic. I also employed its convenient
                        technique of using a json file for an ad hoc database.
                    </p>
                    </li>
                </ul>
            </div>
        );
    }
}

export default ReferencePage;