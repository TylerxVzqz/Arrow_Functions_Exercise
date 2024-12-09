/* Task 1: No Parameters: Activate Hyperdrive */
// TODO: Write an arrow function named `activateHyperdrive` with no parameters that print `"Hyperdrive activated!"` to the console. Call `activateHyperdrive` to test it.
const activeHyperDrive = () => {
  return "Hyperdrive activated!";
};
/* Task 2: Implicit Return: Scan for Lifeforms */
// TODO: Create an arrow function named `scanForLife` that implicitly returns `"No lifeforms detected"` without using curly braces. Print the result of calling `scanForLife`.
const scanForLife = () => "No lifeforms detected";
console.log(scanForLife());
/* Task 3: Implicit Return with Objects: Log Coordinates */
// TODO: Write an arrow function named `currentCoordinates` that returns an object with properties `x`, `y`, and `z`, representing coordinates in space. Use implicit return. Print the returned object from `currentCoordinates`.
const currentCoordinates = () => ({ x: 120, y: 28, z: 85 });
console.log(currentCoordinates());
/* Task 4: Understanding `this`: Message from Home Base */
// TODO: Inside an object named `spacecraft`, create a method named `receiveMessage` using arrow function syntax. This method should log `"Message received: "` followed by a message it receives as a parameter. Directly call `receiveMessage` within `spacecraft` and observe. Observe and explain the behavior of `this` in this context as a comment.
/*
 * Observations: This.name does not print because arrow functions do not have their own context they inherit it from their parent. 'this' refers to the receiveMessage not the spacecraft object.
 * TODO: Explain here.
 */
const spacecraft = {
  name: "Millenium Falcon",
  receiveMessage: (message) => {
    console.log(`Message received: ${message}`);
    console.log(`${this.name} your time jump as has been granted`);
  },
};
spacecraft.receiveMessage("Hello there!");
