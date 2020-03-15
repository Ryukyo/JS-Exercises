import {elements} from './base';

export const getInput = () => elements.searchInput.value;

export const renderResults = recipes => {
    recipes.forEach(renderRecipe);
};

export const clearInput = () => {
    elements.searchInput.value = '';
};

export const clearResults = () => {
    elements.searchResultList.innerHTML = '';
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