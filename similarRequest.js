const User = require('./users');

class SimilarRequest {
    constructor (date, author, text){
        this.date = new Date();
        this.author = author;
        this.text = text;
    }
}

module.exports = SimilarRequest;
//let author1 = new User ( "JohnDoe" );

//let inheritance1 = new SimilarRequest();
//console.log(inheritance1);