const usersKey = 'userDetails';
const container = document.getElementsByClassName('users-details')[0];
const userDetails = JSON.parse(localStorage.getItem(usersKey));

const postKey = 'postDetails';
localStorage.setItem(postKey, JSON.stringify([]));

console.log(container)
function createDiv (item,father,header){
    if(typeof item==="object"){
        for (const description in item) {
            console.log(description)
            let divDescription=document.createElement('div');

            if(typeof item[description]==="object"){

                createDiv(item[description],divDescription)

            }else {
                divDescription.innerText=description+": "+item[description];
            }


            father.appendChild(divDescription)
        }
    }else {
        father.innerText=header+": "+item;
    }
}

for (const user of userDetails) {
    let userBlock = document.createElement('div');
    userBlock.style.border='1px solid red'
    userBlock.classList.add("userBlock")

    for (const char in user) {
        let divChar=document.createElement('div');
        divChar.style.margin='20px'
        divChar.innerText=char+":"

        createDiv(user[char],divChar,char)

        userBlock.appendChild(divChar)
    }

    let button = document.createElement("button");
    button.innerText="Show Posts"
    button.onclick = function (){

        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
            .then(value => value.json())
            .then(value =>{
                let postsDiv = document.createElement("div");
                postsDiv.classList.add("posts")

                userBlock.append(postsDiv)
                for (const postItem of value) {
                    let  post = document.createElement("div");
                    post.innerText=postItem.title;
                    post.classList.add("post")

                    let postDetailsLink = document.createElement("a");
                    postDetailsLink.innerText="Post Details"

                    postDetailsLink.onclick = function (){
                        const selectedPost = JSON.parse(localStorage.getItem(postKey));
                        selectedPost.push(postItem);
                        localStorage.setItem(postKey, JSON.stringify(postItem));
                        postDetailsLink.disabled = true;
                    }
                    postDetailsLink.href=`./post-details.html`

                    postsDiv.appendChild(post)
                    post.appendChild(postDetailsLink)


                }
            })

    }

    userBlock.appendChild(button)


    container.appendChild(userBlock)
}