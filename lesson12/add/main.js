// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

let usersDiv = document.getElementsByClassName("users")[0];

fetch("https://jsonplaceholder.typicode.com/users")
    .then(value => value.json())
    .then(value =>{

        for (const userItem of value) {
            let userDiv = document.createElement("div");
            userDiv.innerText = `${userItem.id}.${userItem.name}`;
            let button = document.createElement("button");
            button.innerText="Show Posts"
            button.onclick = function (){

                fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userItem.id}`)
                    .then(value => value.json())
                    .then(value =>{
                        let postsDiv = document.createElement("div");
                        postsDiv.classList.add("posts")

                        userDiv.append(postsDiv)
                        for (const postItem of value) {
                            let  post = document.createElement("div");
                            post.innerText=postItem.body;
                            post.classList.add("post")

                            let commentsButton = document.createElement("button");

                            commentsButton.innerText="Show Comments"
                            console.log(postItem.id)
                            commentsButton.onclick = function (){
                                fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postItem.id}`)
                                    .then(value => value.json())
                                    .then(value =>{
                                        let commentsDiv = document.createElement("div");
                                        commentsDiv.classList.add("comments");

                                        post.append(commentsDiv);
                                        for (const commentsItem of value) {
                                            let comment = document.createElement("div")
                                            comment.innerText=commentsItem.body;
                                            comment.classList.add("comment");

                                            commentsDiv.append(comment);
                                        }
                                    })

                            }

                            post.append(commentsButton)
                            postsDiv.appendChild(post)


                        }
                    })

            }

            userDiv.append(button)

            usersDiv.append(userDiv)


        }
    })