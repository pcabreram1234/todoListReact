import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
  render () {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link active">Home</Link>
            </li>
            <li>
              <Link to="post" className="nav-link">Posts</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
