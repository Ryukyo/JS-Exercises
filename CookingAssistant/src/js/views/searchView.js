import {elements} from './base';

export const getInput = () => elements.searchInput.value;

export const renderResults = (recipes, page = 1, resultsPerPage = 10) => {
    // Show results of the received array 0-9 on page 1, 10 - 19 on page 2 ...
    const start = (page - 1) - resultsPerPage;
    const end = page * resultsPerPage;
    // Slice excludes end
    recipes.slice(start, end).forEach(renderRecipe);
};

export const clearInput = () => {
    elements.searchInput.value = '';
};

export const clearResults = () => {
    elements.searchResultList.innerHTML = '';
};

const createButton = (page, buttonType) => `<!--
    <button class="btn-inline results__btn--prev">
        <svg class="search__icon">
            <use href="img/icons.svg#icon-triangle-left"></use>
        </svg>
        <span>Page 1</span>
    </button>
    <button class="btn-inline results__btn--next">
        <span>Page 3</span>
        <svg class="search__icon">
            <use href="img/icons.svg#icon-triangle-right"></use>
        </svg>
    </button>
    -->
`;

const renderButtons = (page, numResults, resPerPage) => {
    // Round up in case of decimal "pages" value
    const pages = Math.ceil(numResults / resPerPage);

    if (page === 1 && pages > 1) {
        // Only button for "next" page and if more than one page
    } else if (page < pages) {
        // Display "next" and "previous"
    } else if (page === pages && pages > 1) {
        // On last page only show "previous" button
    }
};

const renderRecipe = recipe => {
    const html = `
    <li>
        <a class="results__link" href="#${recipe.recipe_id}">
            <figure class="results__fig">
                <img src="${recipe.image_url}" alt="${recipe.title}">
            </figure>
            <div class="results__data">
                <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
                <p class="results__author">${recipe.publisher}</p>
            </div>
        </a>
    </li>
    `;
    elements.searchResultList.insertAdjacentHTML('beforeend', html)
};

// Limit is set to 17 since it seems to fit all results within the column of the search results
const limitRecipeTitle = (title, limit = 17) => {
    const newTitle = [];
    if(title.length > limit) {
       title.split(' ').reduce((sum, cur) => {
        if (sum + cur.length <= limit) {
            newTitle.push(cur);
        }
        return sum + cur.length;
       }, 0);
       
       return `${newTitle.join(' ')} ...`;
    }
    return title;
}