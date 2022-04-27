import {onSnake, expandSnake} from "./snake.js";
import { randomGridPosition } from './grid.js'
let food = getRandomFoodPosition()
const ExpansionRate = 1; 


export function draw(gameBoard) {
        const foodElement  = document.createElement('div');
        foodElement.style.gridRowStart = food.x;
        foodElement.style.gridColumnStart = food.y;
        foodElement.classList.add('food');
        gameBoard.appendChild(foodElement);

}

export function update() {
    if (onSnake(food)) {
        expandSnake(ExpansionRate)
        food = getRandomFoodPosition()
    }
}

function getRandomFoodPosition() {
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
      newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
  }