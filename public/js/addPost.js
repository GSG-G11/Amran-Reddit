
 
 // add new post and show it

 const postBtn = document.querySelector('.clearfix .postbtn');
 const titleField = document.querySelector('.add-post #title');
 const contentField = document.querySelector('.add-post #content');
 
 const contPost = document.querySelector('.contPost');
 
 postBtn.addEventListener('click', (e) =>{
   console.log('hi');
     e.preventDefault();
     fetch('/post', {
         method: "POST",
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({
             title: titleField.value,
             content: contentField.value
         })
     }).then(data =>data.json())
       .then( ({message, post}) =>{
         if(titleField.value != '' && contentField.value != ''){  // for validation post
 
           swal('Great',message, 'success');
           document.getElementById('add-post').style.display = 'none';
           titleField.value = '';
           contentField.value= '';
   
           const postDiv = document.createElement('div');
           postDiv.classList = 'contPost';
           postDiv.style.backgroundColor = 'white';
           postDiv.style.border = '1px solid #888';
           const h2 = document.createElement('h2');
           const h4 = document.createElement('h4');
           h2.innerText = post.title;
           h4.innerText = post.content;
   
           postDiv.append(h2, h4);
   
           contPost.append(postDiv);
         }
 
 
 
 
       })
 
     .catch(err =>console.log(err))
 })
 
 
 
 