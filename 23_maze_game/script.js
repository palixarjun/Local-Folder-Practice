// Define the restartGame function to reset and start the game
restartGame = () => {
    // Destructure Matter.js components for easy access
    const { Engine, Render, Runner, World, Bodies, Body, Events } = Matter;

    // Define grid size and screen dimensions
    const cellsHorizontal = 20;
    const cellsVertical = 10;
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Calculate unit lengths based on screen size and grid dimensions
    const unitLengthX = width / cellsHorizontal;
    const unitLengthY = height / cellsVertical;

    // Create a new physics engine instance
    const engine = Engine.create();
    engine.world.gravity.y = 0; // Set gravity to 0 initially
    const { world } = engine;

    // Set up the rendering engine with specific options
    const render = Render.create({
        element: document.body,
        engine: engine,
        options: {
            wireframes: false, // Disable wireframes for a solid appearance
            width,             // Set render width to match screen width
            height             // Set render height to match screen height
        }
    });

    // Start the rendering and runner processes
    Render.run(render);
    Runner.run(Runner.create(), engine);

    // Define the outer walls (borders) of the maze
    const walls = [
        Bodies.rectangle(width / 2, 0, width, 2, { isStatic: true, label: 'border' }), // Top border
        Bodies.rectangle(width / 2, height, width, 2, { isStatic: true, label: 'border' }), // Bottom border
        Bodies.rectangle(0, height / 2, 2, height, { isStatic: true, label: 'border' }), // Left border
        Bodies.rectangle(width, height / 2, 2, height, { isStatic: true, label: 'border' }) // Right border
    ];
    World.add(world, walls); // Add borders to the world

    // Helper function to shuffle an array
    const shuffle = arr => {
        let counter = arr.length;

        while (counter > 0) {
            const index = Math.floor(Math.random() * counter);
            counter--;
            const temp = arr[counter];
            arr[counter] = arr[index];
            arr[index] = temp;
        }
        return arr;
    };

    // Create a grid to track visited cells
    const grid = Array(cellsVertical).fill(null).map(() => Array(cellsHorizontal).fill(false));

    // Create arrays to track vertical and horizontal walls
    const verticals = Array(cellsVertical).fill(null).map(() => Array(cellsHorizontal - 1).fill(false));
    const horizontals = Array(cellsVertical - 1).fill(null).map(() => Array(cellsHorizontal).fill(false));

    // Randomly select a starting cell in the grid
    const startRow = Math.floor(Math.random() * cellsVertical);
    const startColumn = Math.floor(Math.random() * cellsHorizontal);

    // Recursive function to generate the maze by stepping through cells
    const stepThroughCell = (row, column) => {
        // If the cell has already been visited, return
        if (grid[row][column]) {
            return;
        }

        // Mark the cell as visited
        grid[row][column] = true;

        // Shuffle and iterate over potential neighboring cells
        const neighbors = shuffle([
            [row - 1, column, 'up'],     // Neighbor above
            [row, column + 1, 'right'],  // Neighbor to the right
            [row + 1, column, 'down'],   // Neighbor below
            [row, column - 1, 'left']    // Neighbor to the left
        ]);

        for (let neighbor of neighbors) {
            const [nextRow, nextColumn, direction] = neighbor;

            // Check if the neighboring cell is out of bounds
            if (nextRow < 0 || nextRow >= cellsVertical || nextColumn < 0 || nextColumn >= cellsHorizontal) {
                continue;
            }

            // If the neighboring cell has been visited, skip it
            if (grid[nextRow][nextColumn]) {
                continue;
            }

            // Remove the wall between the current cell and the neighboring cell
            if (direction === 'left') {
                verticals[row][column - 1] = true;
            } else if (direction === 'right') {
                verticals[row][column] = true;
            } else if (direction === 'up') {
                horizontals[row - 1][column] = true;
            } else if (direction === 'down') {
                horizontals[row][column] = true;
            }

            // Recursively visit the neighboring cell
            stepThroughCell(nextRow, nextColumn);
        }
    };

    // Start maze generation from the random starting cell
    stepThroughCell(startRow, startColumn);

    // Create and add horizontal walls to the world
    horizontals.forEach((row, rowIndex) => {
        row.forEach((open, columnIndex) => {
            if (open) {
                return; // Skip if there's no wall
            }

            const wall = Bodies.rectangle(
                columnIndex * unitLengthX + unitLengthX / 2,
                rowIndex * unitLengthY + unitLengthY,
                unitLengthX,
                5, {
                friction: 0,
                label: 'wall',
                isStatic: true,
                render: {
                    fillStyle: 'rgb(255, 255, 255)' // Light purple color
                }
            });
            World.add(world, wall); // Add wall to the world
        });
    });

    // Create and add vertical walls to the world
    verticals.forEach((row, rowIndex) => {
        row.forEach((open, columnIndex) => {
            if (open) {
                return; // Skip if there's no wall
            }

            const wall = Bodies.rectangle(
                columnIndex * unitLengthX + unitLengthX,
                rowIndex * unitLengthY + unitLengthY / 2,
                5,
                unitLengthY, {
                friction: 0,
                label: 'wall',
                isStatic: true,
                render: {
                    fillStyle: 'rgb(255, 255, 255)' // Light purple color
                }
            });
            World.add(world, wall); // Add wall to the world
        });
    });

    // Create the goal (winning point) in the maze
    const goal = Bodies.rectangle(
        width - unitLengthX / 2,
        height - unitLengthY / 2,
        unitLengthX * 0.7,
        unitLengthY * 0.7, {
        label: 'goal',
        isStatic: true,
        render: {
            fillStyle: 'rgb(144, 238, 144)' // Light green color
        }
    });
    World.add(world, goal); // Add goal to the world

    // Create the player's ball
    const ballRadius = Math.min(unitLengthX, unitLengthY) / 4;
    const ball = Bodies.circle(
        unitLengthX / 2,
        unitLengthY / 2,
        ballRadius, {
        friction: 0,
        label: 'ball',
        render: {
            fillStyle: 'rgb(255, 144, 0)' // Orange color
        }
    });
    World.add(world, ball); // Add ball to the world

    // Function to hide the information text when the game starts
    const removeInfo = () => {
        document.querySelector('.info').classList.add('hidden');
    };

    // Define the keydown handler function for ball movement
    function keydownHandler(event) {
        const { x, y } = ball.velocity;
        removeInfo(); // Hide info when a key is pressed

        // Define ball speed
        const speed = 2;

        // Handle key presses for ball movement
        if (event.keyCode === 87 || event.keyCode === 38) { // 'W' or 'Up arrow'
            Body.setVelocity(ball, { x, y: Math.max(y - speed, -speed) });
        }
        if (event.keyCode === 68 || event.keyCode === 39) { // 'D' or 'Right arrow'
            Body.setVelocity(ball, { x: Math.min(x + speed, speed), y });
        }
        if (event.keyCode === 83 || event.keyCode === 40) { // 'S' or 'Down arrow'
            Body.setVelocity(ball, { x, y: Math.min(y + speed, speed) });
        }
        if (event.keyCode === 65 || event.keyCode === 37) { // 'A' or 'Left arrow'
            Body.setVelocity(ball, { x: Math.max(x - speed, -speed), y });
        }
    }

    // Ensure previous keydown listeners are removed and the new one is added
    document.removeEventListener('keydown', keydownHandler);
    document.addEventListener('keydown', keydownHandler);

    // Win condition: when the ball reaches the goal
    Events.on(engine, 'collisionStart', event => {
        event.pairs.forEach((collision) => {
            const labels = ['ball', 'goal'];

            if (labels.includes(collision.bodyA.label) &&
                labels.includes(collision.bodyB.label)) {

                // Enable gravity and make walls fall when the goal is reached
                world.gravity.y = 1;

                // Add a slight initial impulse to make walls visibly fall
                world.bodies.forEach(body => {
                    if (body.label === 'wall') {
                        Body.setStatic(body, false); // Make walls dynamic
                        Body.setVelocity(body, {
                            x: Math.random() * 2 - 1, // Random x velocity
                            y: Math.random() * 2 - 1  // Random y velocity
                        });
                    }
                });
                document.querySelector(".winner").classList.remove('hidden');
            }
        });
    });

    // Event listener for restarting the game
    document.querySelector('.restart').addEventListener('click', event => {
        event.preventDefault();

        // Clear the world and engine to reset the game
        World.clear(world);
        Engine.clear(engine);
        Render.stop(render);

        // Remove the old canvas element and reset the render object
        render.canvas.remove();
        render.canvas = null;
        render.context = null;
        render.textures = {};

        // Hide the winner text and show the info text
        document.querySelector('.winner').classList.add('hidden');
        document.querySelector('.info').classList.remove('hidden');

        // Restart the game by calling restartGame recursively
        restartGame();
    });
};

// Start the game initially
restartGame();
