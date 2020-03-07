import * as React from 'react';
import * as ReactDOM from 'react-dom';
//import Button from '@material-ui/core/Button';

import {Hello} from './components/hello';

import './index.css';


const App = () => {
    return (
      <Hello />
    );
  }



ReactDOM.render(<App />, document.getElementById('root'));