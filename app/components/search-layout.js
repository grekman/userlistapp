import React, {Component} from 'react';

export default class SearchLayout extends Component {
  render() {
    return(
      <div>
        <header> Search Title </header>

        <div>
          {this.props.children}
        </div>
        <footer> Total Result </footer>
      </div>
    );
  }
};
