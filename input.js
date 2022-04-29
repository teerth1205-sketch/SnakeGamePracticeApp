import {SNAKE_SPEED} from './snake.js';


let inputDirection = { x: 0, y: 0}; 
let lastInputDirecton = { x: 0, y: 0};
export let snakeSpeed = 5;
//const keysPressed = {'ArrowUp': true, 'ArrowDown': true};

let keysPressed = {}; // You could also use an array

window.addEventListener('keydown', e => {
   
    switch (e.key) {
        case 'ArrowUp':
            if (lastInputDirecton.x !== 0) break
            inputDirection = { x: -1, y: 0}
            break;
        case 'ArrowDown':
            if (lastInputDirecton.x !== 0) break
            inputDirection = { x: 1, y: 0}
            break;
        case 'ArrowLeft':
            if (lastInputDirecton.y !== 0) break
                inputDirection = { x: 0, y: -1}
                break;
        case 'ArrowRight':
            if (lastInputDirecton.y !== 0) break
            inputDirection = { x: 0, y: 1}
            break;
        case 'Shift':
            document.addEventListener('keydown', (e) => {
                keysPressed[e.key] = true;
             
                if (keysPressed['Shift'] && e.key == 'ArrowUp') {
                    snakeSpeed += 1;
                    console.log(snakeSpeed); 
                    //alert(`${speed} Hellooo`);
                }
             });
             
             document.addEventListener('keyup', (event) => {
                delete keysPressed[event.key];
             });
            break
    }
})



export function getInputDirection() {
    lastInputDirecton = inputDirection;
    return inputDirection
}