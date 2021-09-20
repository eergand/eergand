class User{
    constructor(username, isNotEmpty){
        this.username = username;
        this.isNotEmpty();
    }
    isNotEmpty(){
        if ( this.username == "" || this.username.length == 0 ){
        console.log(null);
    } else {
        console.log(this.username);
        }
    }
}

//let author1 = new User ( "JohnDoe" );
//console.log(author);
module.exports = User;