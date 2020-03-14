// Global app controller
import Search from './models/Search';
const state = {};

const controlSearch = async () => {
    //Get query from view TODO
    const query = 'pizza';

    if(query) {
        //Create and add search object to state
        state.search = new Search(query);

        //Clear input and loading indicator

        //Search for recipes
        await state.search.getResults();

        //Display results
        console.log(state.search.result)
    }
}

document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});