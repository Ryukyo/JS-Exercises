import axios from 'axios';

export default class Recipe {
    constructor(id) {
        this.id = id;
    }

    async getRecipe () {
        try {
            const res = await axios(`https://forkify-api.herokuapp.com/api/get?rId=${this.id}`);
            this.title = res.data.recipe.title;
            this.publisher = res.data.recipe.publisher;
            this.img = res.data.recipe.image_url;
            this.url = res.data.recipe.source_url;
            this.ingredients = res.data.recipe.ingredients;
        } catch (error) {
            console.log(error);
            alert("Could not get the recipe")
        }
    }

    // Assuming an arbitrary time of 15 minutes per 3 ingredients
    calcTime () {
        const numberOfIngr = this.ingredients.length;
        const periods = Math.ceil(numberOfIngr/3);
        this.time = periods * 15;
    }

    calcServings () {
        this.servings = 4;
    }
}