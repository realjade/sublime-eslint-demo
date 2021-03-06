/*
* @Author: jade
* @Date:   2016-08-31 11:22:36
* @Last Modified by:   jade
* @Last Modified time: 2016-08-31 11:30:12
*/

import './index.html';
import './index.less';
import ReactDOM from 'react-dom';
import React from 'react';
import { browserHistory } from 'react-router';
import Routes from '../routes/index';

ReactDOM.render(<Routes history={browserHistory} />, document.getElementById('root'));


function helloWorld(ready) {
  return new Promise((resolve, reject) => {
    if (ready) {
      resolve('Hello World!');
    } else {
      reject('Good bye!');
    }
  });
}

helloWorld(false).then(message => {
  console.log(message);
}, error => {
  console.log(error);
});

