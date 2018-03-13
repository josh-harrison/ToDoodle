import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
    return (
        <nav>
            <IndexLink to="/" activeClassName="active">To Do List</IndexLink>
            {" | "}
            <Link to="/reference" activeClassName="active">Reference</Link>
        </nav>
    );
};

export default Header;