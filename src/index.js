// import "@babel/polyfill";
import avatar from './未命名.png';
import style from './index.scss'
import style1 from './image.css';

console.log(avatar, '111111111');
let image = new Image()
image.classList.add(style.img)
image.classList.add(style1.img)
image.src = avatar
document.querySelector('#root').appendChild(image)
// console.leg(111)

console.log(avatar);
let image1 = new Image()
image1.classList.add('img')
image1.src = avatar
document.querySelector('#root').appendChild(image1)

let iconCt = document.createElement('div')
iconCt.innerHTML = `<div class="${style.iconfont} ${style['icon-04xuexifenxiang']}"></div>`
document.querySelector('#root').appendChild(iconCt)

let count = 0;
let btn = document.createElement('button');
btn.innerText = '+1'
document.querySelector('#root').appendChild(btn);
let div = document.createElement('div');
div.innerText = count
document.querySelector('#root').appendChild(div);
btn.onclick = ()=>{
  console.log(1);
  count += 1;
  div.innerText = count
  document.querySelector('#root').appendChild(div)
}

// use es6
const arr = [
  new Promise(()=>{}),
  new Promise(()=>{}),
];
