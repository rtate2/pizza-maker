import cheese from './components/cheese.js'
import order from './components/order.js'

// init function goes in the main
const init = () => {
    cheese.printCheeseOptions();
    order.printOrderButton();
};

init();




// const getSelectedBreads = () => {
//     const selectedBreads = [];
//     const breadCheckboxes = document.getElementsByClassName('bread');
//     for (let i = 0; i < breadCheckboxes.length; i++) {
//         for (let i = 0; i < breads.length; i++) {
//             if (breadCheckboxes[i].checked && breadCheckboxes[i].id === breads[i].id) {
//                 selectedBreads.push(breads[i]);
//             };
//         }
//     };
//     return selectedBreads;
// };