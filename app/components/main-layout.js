import React, {Component} from 'react';
import {Link} from 'react-router';

export default class MainLayout extends Component {
  render() {
    return (

      <div>
        <aside>
          <ul>
            <li><Link to="/" >Home </Link></li>
            <li><Link to="/users" >Users </Link></li>
            <li><Link to="/widgets" >Widget </Link></li>
          </ul>
        </aside>
        <main>
          {this.props.children}
         </main>
      </div>
    );
  }
};
