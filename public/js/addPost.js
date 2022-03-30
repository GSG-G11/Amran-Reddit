// add new post and show it

const postBtn = document.querySelector('.clearfix .postbtn');
const titleField = document.querySelector('.add-post #title');
const contentField = document.querySelector('.add-post #content');

const contPost = document.querySelector('.contPost');

postBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    fetch('/post', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: titleField.value,
            content: contentField.value
        })
    }).then(data =>data.json())
      .then( ({messege, post}) =>{
        swal('Great',messege, 'success')
        document.getElementById('add-post').style.display = 'none';
        titleField.value = '';
        contentField.value= '';

        const postDiv = document.createElement('div');
        postDiv.classList = 'contPost';
        postDiv.style.backgroundColor = 'white';
        postDiv.style.border = '1px solid #888';
        const h1 = document.createElement('h1');
        const h3 = document.createElement('h3');
        h1.innerText = post.title;
        h3.innerText = post.content;

        postDiv.append(h1, h3);

        contPost.append(postDiv);




      })

    .catch(err =>console.log(err))
})



