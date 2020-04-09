export default class Likes {
    constructor () {
        this.likes = [];
    }

    addLike (id, title, publisher, img) {
        // Object containing all the elements that are to be displayed in the like-list
        const like = { id, title, publisher, img};
        this.likes.push(like);
        return like;
    }

    deleteLike(id) {
        // As with list
        const index = this.likes.findIndex(el => el.id === id);
        this.likes.splice(index, 1);
    }

    isLiked(id) {
        // -1 if no item with the id in question is found on the list => check if its not -1 = item is on list
        return this.likes.findIndex(el => el.id === id) !== -1;
    }

    getNumberOfLikes () {
        return this.likes.length;
    }
}