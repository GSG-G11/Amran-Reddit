// const contPost = document.querySelector('.contPost');   //already been declared on addPost file



fetch('/getUsersPosts')
  .then(data => data.json())
  .then(posts => {

    posts.forEach(post => {

      const postDiv = document.createElement('div');
      postDiv.classList = 'contPost';
      postDiv.style.backgroundColor = 'white';
      postDiv.style.border = '1px solid #888';
      const deleteIcon = document.createElement('div');
      deleteIcon.classList = 'delete-icon'
      const icon = document.createElement('i');
      icon.classList = 'fas fa-trash-alt';
      const h2 = document.createElement('h2');
      const h4 = document.createElement('h4');
      h2.innerText = post.title;
      h4.innerText = post.content;


      deleteIcon.appendChild(icon)
      postDiv.append(h2, h4, deleteIcon)
      contPost.appendChild(postDiv)


      deleteIcon.addEventListener("click", () => {
        fetch('/deletePost', {
          method: 'delete',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: post.id })
        })
        deleteIcon.parentElement.remove();

      })
    })

  })
  .catch(err => console.log(err))



