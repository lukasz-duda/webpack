import _ from 'lodash';
import './style.css';
import Icon from './image.png';
import { print } from './print.ts';
import * as React from 'react';
import { createRoot } from 'react-dom/client';

function component() {
    const element = <div className="hello">
        <img src={Icon} />
        {_.join(['Hello', 'webpack'], ' ')}
        <button onClick={print}>
            Click
        </button>
    </div>;

    return element;
}

const rootElement = document.getElementById('root');
createRoot(rootElement).render(component());