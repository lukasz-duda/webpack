import _ from 'lodash';
import './style.css';
import Icon from './image.png';
import { print } from './print.js'

function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    const image = new Image();
    image.src = Icon;

    element.appendChild(image);

    const button = document.createElement('button');
    button.textContent = 'Click and check the console';
    element.append(button);
    button.onclick = print;

    return element;
}

document.body.appendChild(component());