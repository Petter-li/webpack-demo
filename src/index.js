import './index.less'
//webpack中打包图片
//fileloader会在内部生成一张图片，并返回地址
// 1)js中创建图片
/* import head from './head.png'//把图片引入，返回的结果是一个新的图片地址
const image = new Image();
image.src = head;
document.body.appendChild(image); */
// 2)css中引入
// 3)html中引入 
/* 
require('./index.css')
require('./index.less')
const str = require('./a.js');
console.log(str);
const fn = () => {
    console.log('1234');
}
fn();

@log
class A {
    a =1
}
const a = new A();
console.log(a.a);

function log(target) {
    console.log(target);
} */
/* console.log($); */