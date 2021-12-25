// //  1.
//  // Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// //  Для кожного елементу свій блок div.post
// //  Всі характеристики повинні мати свої блоки всередені div.post
// //  https://jsonplaceholder.typicode.com/posts

// let postsDiv = document.getElementsByClassName("posts")[0];
//
// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(value => value.json())
//     .then(value =>{
//
//         for (const postItem of value) {
//             let postDiv = document.createElement("div");
//             postDiv.classList.add('post');
//
//             let postIdDiv = document.createElement("div");
//             postIdDiv.innerText=`Id: ${postItem.id}`;
//
//             let postUserIdDiv = document.createElement("div");
//             postUserIdDiv.innerText=`User Id: ${postItem.userId}`;
//
//             let postTitle = document.createElement("h3");
//             postTitle.innerText= postItem.title;
//
//             let postBodyDiv = document.createElement("div");
//             postBodyDiv.innerText=postItem.body;
//
//             postDiv.append(postIdDiv, postUserIdDiv,postTitle,postBodyDiv);
//
//             postsDiv.appendChild(postDiv)
//
//         }
//     })

//   //    2.
// //  Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// //      Для кожного елементу свій блок div.comment
//  // Всі характеристики повинні мати свої блоки всередені div.comment

// https://jsonplaceholder.typicode.com/comments


let commentsDiv = document.getElementsByClassName("comments")[0];
console.log(commentsDiv)


fetch("https://jsonplaceholder.typicode.com/comments")
    .then(value => value.json())
    .then(value =>{
        console.log(value);
        for (const commentItem of value) {
            let commentDiv = document.createElement("div");
            commentDiv.classList.add('post');

            let postIdDiv = document.createElement("div");
            postIdDiv.innerText = `Post Id: ${commentItem.postId}`;

            let postGenIdDiv = document.createElement("div");
            postGenIdDiv.innerText = `Id: ${commentItem.id}`;

            let postName = document.createElement("h3");
            postName.innerText = commentItem.name;

            let postEmail = document.createElement("div");
            postEmail.innerText = `Email: ${commentItem.email}`;

            let postBody = document.createElement("div");
            postBody.innerText = commentItem.body;

            commentDiv.append(postIdDiv,postGenIdDiv,postName,postEmail,postBody)

            commentsDiv.appendChild(commentDiv);
        }
    })