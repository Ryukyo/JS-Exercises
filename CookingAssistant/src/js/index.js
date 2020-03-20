// Global app controller
import Search from './models/Search';
import * as searchView from './views/searchView';
import {elements, renderLoader, clearLoader} from './views/base';

const state = {};

const controlSearch = async () => {
    //Get query from view
    const query = searchView.getInput();

    if(query) {
        //Create and add search object to state
        state.search = new Search(query);

        //Clear input, results and add loading indicator
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);

        //Search for recipes
        await state.search.getResults();

        //Display results
        clearLoader();
        searchView.renderResults(state.search.result);
    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');

    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
    }
});