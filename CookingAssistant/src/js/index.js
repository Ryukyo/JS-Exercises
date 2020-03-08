// Global app controller
import axios from 'axios';

async function getResults (query) {
    try {
        const result = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${query}`);
        const recipes = result.data.recipes;
        return recipes;
    } catch (error) {
        console.log(error);
    }
}