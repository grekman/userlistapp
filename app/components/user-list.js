import React, {Component} from 'react';
import {Link} from 'react-router';

export default class UserList extends Component {
  render() {
    return(
      <ul>
        <li><Link to="users/1" />User 1 </li>
        <li><Link to="users/2" />User 2 </li>
        <li><Link to="users/3" />User 3 </li>
        <li><Link to="users/4" />User 4 </li> 
      </ul>
    )

  }
}
