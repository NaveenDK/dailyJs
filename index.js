//Blog post object with following 
//title
//body
//author
//views
//comments
//(author,body) properties for comment
//isLive

let post = new Post ('a','b','c');

console.log(post);

function Post(title,body,author){
this.title = title;
this.body = body;
this.author = author;
this.views=0;
this.comments= [];
this.isLive=false;
}

