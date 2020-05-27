import { formHandler } from './formHandler'

function addEventListeners() {
    // Add event listener to 'Search' submit button
    document.getElementById('searchSubmit').addEventListener('click', formHandler);
};

export { addEventListeners };