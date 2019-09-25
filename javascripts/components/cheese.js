// always need to import the print to dom function
import utilities from '../helpers/utilities.js'

// created  function to print cheese using the print to dom function
const printCheeseOptions = () => {
    const domString = 'cheese';
    utilities.printToDom('cheese-counter', domString);
}

// always need to export function to call it in the init function
export default { printCheeseOptions }
