const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const submitBtn = document.querySelector('#submit')

// add new post and show it
submitBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    fetch('/post', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: titleInput.value,
            content: contentInput.value
        })
    }).then(data =>data.json())
    .then(console.log())
    .then( ({messege, post}) =>{
        swal('Great',messege, 'success')
        titleInput.value = '';
        contentInput.value= '';

    })
    .then(err =>console.log(err))
})