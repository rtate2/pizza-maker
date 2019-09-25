import cheese from './components/cheese.js'
import order from './components/order.js'

// init function goes in the main
const init = () => {
    cheese.printCheeseOptions();
    order.printOrderButton();
};

init();