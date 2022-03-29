// add new post and show it

const postBtn = document.querySelector('.clearfix .postbtn');
const titleField = document.querySelector('.add-post #title');
const contentField = document.querySelector('.add-post #content');


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
    .then(data =>console.log(data))
      .then( ({messege, post}) =>{

        
        swal('Great',messege, 'success')
        .then(data =>console.log(data))
        titleInput.value = '';
        contentInput.value= '';


      })
    .then(err =>console.log(err))
})



