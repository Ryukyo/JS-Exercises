// Global app controller
import Search from './models/Search';
import Recipe from './models/Recipe';
import List from './models/List';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import * as listView from './views/listView';
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
};

['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));

// List Controller

const controlList = () => {
    // Create list if none is there
    if (!state.list) state.list = new List();

    // Add each ingredient to list and show in UI
    state.recipe.ingredients.forEach(el => {
        const item = state.list.addItem(el.count, el.unit, el.ingredient);
        listView.renderItem(item);
    });
};

// Delete and update item list events
elements.shopping.addEventListener('click', e => {
    const id = e.target.closest('.shopping__item').dataset.itemid;

    if (e.target.matches('.shopping__delete, shopping__delete *')) {
        // Delete from state object
        state.list.deleteItem(id);

        //Delete from UI
        listView.deleteItem(id);

        // Handle the count update
    } else if (e.target.matches('.shopping__count-value')) {
        const val = parseFloat(e.target.value, 10);
        // Don't allow values below 0
        if (val >= 0) state.list.updateCount(id, val);
    }
});


// Handling recipe button clicks
elements.recipe.addEventListener('click', e => {
    if (e.target.matches('.btn-decrease, .btn-decrease *')) {
        if (state.recipe.servings > 1) {
            state.recipe.updateServings('dec');
            recipeView.updateServingsAndIngredientsUI(state.recipe);
        }
    } else if (e.target.matches('.btn-increase, .btn-increase *')) {
        state.recipe.updateServings('inc');
        recipeView.updateServingsAndIngredientsUI(state.recipe);
    } else if (e.target.matches('.recipe__btn--add, .recipe__btn--add *')) {
        controlList();
    }
});