// Global app controller
import Search from './models/Search';
import Recipe from './models/Recipe';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import {elements, renderLoader, clearLoader} from './views/base';

const state = {};


/*
    Search Controller
*/
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

        try {
        //Search for recipes
        await state.search.getResults();

        //Display results
        clearLoader();
        searchView.renderResults(state.search.result);
        } catch (error) {
            alert('Error search went wrong');
            clearLoader();
        }
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


/*
    Recipe Controller
*/
const controlRecipe = async () => {
    // Get ID from URL
    const id = window.location.hash.replace('#', '');

    if (id) {
        // Prepare UI
        recipeView.clearRecipe();
        renderLoader(elements.recipe);

        // Highlight selected search item
        if (state.search) searchView.highlightingSelectedRecipe(id);

        // Create new recipe object
        state.recipe = new Recipe(id);

        // Get recipe data
        try {
            await state.recipe.getRecipe();
            state.recipe.parseIngredients();
         
        // Calculate servings and time
            state.recipe.calcTime();
            state.recipe.calcServings();

        // Render recipe
            clearLoader();
            recipeView.renderRecipe(state.recipe);
        }catch (error) {
            alert('Error getting recipe id')
        }
    }
}

['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));