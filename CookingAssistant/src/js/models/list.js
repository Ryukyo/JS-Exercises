import uniqid from 'uniqid';

// Used as shopping list
export default class List {
    constructor() {
        this.items = [];
    }

    addItem (count, unit, ingredient) {
        // Add items to the array of all items on the (shopping) list, using an externally created unique id
        const item = {
            id: uniqid(),
            count,
            unit,
            ingredient
        }
        this.items.push(item);
        return item;
    }

    deleteItem(id) {
        // Completely remove item from list
        const index = this.items.findIndex(el => el.id === id);
        this.items.splice(index, 1);
    }

    updateCount(id, newCount) {
        // Replace current count of ingredient with new count
        this.items.find(el => el.id === id).count === newCount;
    }
}