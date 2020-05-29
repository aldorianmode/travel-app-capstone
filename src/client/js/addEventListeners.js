import { handleSubmit } from './formHandler'

function addEventListeners() {
    // Add event listener to 'Search' submit button
    document.getElementById('searchSubmit').addEventListener('click', handleSubmit);
};

export { addEventListeners };