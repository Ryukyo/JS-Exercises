import {elements} from './base';

export const getInput = () => elements.searchInput.value;

export const renderResults = (recipes, page = 1, resultsPerPage = 10) => {
    // Show results of the received array 0-9 on page 1, 10 - 19 on page 2 ... (current page)
    const start = (page - 1) * resultsPerPage;
    const end = page * resultsPerPage;
    // Slice excludes end
    recipes.slice(start, end).forEach(renderRecipe);
    //Render pagination buttons
    recipes.length > resultsPerPage ? renderButtons(page, recipes.length, resultsPerPage) : null;
};

export const clearInput = () => {
    elements.searchInput.value = '';
};

export const clearResults = () => {
    elements.searchResList.innerHTML = '';
    elements.searchResPages.innerHTML = '';
};

export const highlightingSelectedRecipe = id => {
    const results = Array.from(document.querySelectorAll('.results__link'));
   // Deselect already highlighted recipes
    results.forEach(el => {
        el.classList.remove('results__link--active');
    })
    // Highlight new selected recipe
    document.querySelector(`.results__link[href*="${id}"]`).classList.add('results__link--active');
}

//buttonType: previous or next
const createButton = (page, buttonType) => `
    <button class="btn-inline results__btn--${buttonType}" data-goto=${buttonType === 'prev'? page - 1 : page + 1}>
        <span>${buttonType === 'prev'? page - 1 : page + 1}</span>
        <svg class="search__icon">
            <use href="img/icons.svg#icon-triangle-${buttonType === 'prev'? 'left' : 'right'}"></use>
        </svg>
    </button>
`;

const renderButtons = (page, numResults, resPerPage) => {
    // Round up in case of decimal "pages" value
    const pages = Math.ceil(numResults / resPerPage);
    let button;

    if (page === 1 && pages > 1) {
        // Only button for "next" page and if more than one page
        button = createButton(page, 'next');
    } else if (page < pages) {
        // Display "next" and "previous"
        button = `
            ${createButton(page, 'prev')}
            ${createButton(page, 'next')}
        `;
    } else if (page === pages && pages > 1) {
        // On last page only show "previous" button
        button = createButton(page, 'prev');
    }
    elements.searchResPages.insertAdjacentHTML('afterbegin', button);
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
    elements.searchResList.insertAdjacentHTML('beforeend', html)
};

// Limit is set to 17 since it seems to fit all results within the column of the search results
export const limitRecipeTitle = (title, limit = 17) => {
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