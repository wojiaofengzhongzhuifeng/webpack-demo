import avatar from './未命名.png';
import style from './index.scss'

console.log(avatar);
let image = new Image()
image.classList.add(style.img)
image.src = avatar
document.querySelector('#root').appendChild(image)

console.log(avatar);
let image1 = new Image()
image1.classList.add('img')
image1.src = avatar
document.querySelector('#root').appendChild(image1)