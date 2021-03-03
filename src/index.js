import avatar from './未命名.png';
import './index.scss'

console.log(avatar);
let image = new Image()
image.classList.add('img')
image.src = avatar
document.querySelector('#root').appendChild(image)