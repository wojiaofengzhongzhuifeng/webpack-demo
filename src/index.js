import avatar from './未命名.png';

console.log(avatar);
let image = new Image()
image.src = avatar
document.querySelector('#root').appendChild(image)