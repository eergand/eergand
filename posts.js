const SimilarRequest = require('./similarRequest');
const User = require('./users');

class Post extends Inheritance {
    constructor(date, author, text, title, isNotEmpty){
        super (date, author, text);
        this.title = title;
        this.isNotEmpty = isNotEmpty
    }
    isNotEmpty(){
        if ( this.title == "" || this.title.length == 0 ){
        console.log(null);
    } else {
        console.log(this.title);
        }
    }
}

module.exports = Post;