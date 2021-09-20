const SimilarRequest = require('./similarRequest');
const User = require('./users');

class Comment extends SimilarRequest {
    constructor (date, author, text){
        this.date = new Date();
        this.author = author;
        this.text = text;
    }
}

module.exports = Comment;
