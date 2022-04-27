let inputDirection = { x: 0, y: 0}; 
let lastInputDirecton = { x: 0, y: 0};

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
    }
})

export function getInputDirection() {
    lastInputDirecton = inputDirection;
    return inputDirection
}