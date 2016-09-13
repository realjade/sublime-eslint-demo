/*
* @Author: jade
* @Date:   2016-08-31 11:22:36
* @Last Modified by:   jade
* @Last Modified time: 2016-08-31 11:30:12
*/

'use strict';

// 测试jquery库是否可以全局
$('#test').show();

console.log('test')

function a() {
  function b() {
    console.log('1');
  }
  b();
}
a();
