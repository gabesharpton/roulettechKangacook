import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Header = () => {
    return (
        <>
            <div className="navbar navbar-expand-lg navbar-light bg-light"> {/* Add Bootstrap classes */}
                <div className="container">
                    <Link className="navbar-brand" to="/">Home</Link> {/* Add Bootstrap classes */}
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/page1">Page 1</Link> {/* Add Bootstrap classes */}
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/page2">Page 2</Link> {/* Add Bootstrap classes */}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;