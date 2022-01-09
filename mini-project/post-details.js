const postKey = 'postDetails';
const container = document.getElementsByClassName('post-details')[0];
const postDetails = JSON.parse(localStorage.getItem(postKey));
console.log(postDetails)

let div = document.createElement('div');
div.classList.add('post')

    for (const char in postDetails) {
        console.log(char)
        let divChar=document.createElement('div');
        divChar.innerText=char+": "+postDetails[char];

        div.appendChild(divChar)

    }

    document.body.appendChild(div)


fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postDetails.id}`)
    .then(value => value.json())
    .then(value =>{
        let commentsDiv = document.createElement("div");
        commentsDiv.classList.add("comments");
        console.log(value)

        document.body.append(commentsDiv);
        for (const commentsItem of value) {
            let comment = document.createElement("div")
            comment.innerText="Comment: "+commentsItem.body;
            comment.classList.add("comment");

            commentsDiv.append(comment);
        }})