import React from 'react';
import {render} from 'react-dom';

class IndexView extends React.Component {
  render() {
    return <h1>Welcome to Durgabari 2017</h1>
  }
}

render(<IndexView />, document.getElementById('site_wrapper'));
