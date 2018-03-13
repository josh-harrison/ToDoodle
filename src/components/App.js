import React, {PropTypes} from 'react';
import Header from './Header';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends React.Component {
    render() {
        return(
            <div className="container-fluid">
                <h1>ToDoodle</h1>
                <Header />
                <MuiThemeProvider>
                    {this.props.children}
                </MuiThemeProvider>
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;