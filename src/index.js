import avatar from './未命名.png';
import style from './index.scss'

console.log(avatar, '111111111');
let image = new Image()
image.classList.add(style.img)
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
