
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const submitBtn = document.querySelector('#submit')


    //add new user (sign up)
//When we use fetch to send the data of requist we should use the input type button not submit
//When we use form to send the data we need to use submit button
const signupBtn = document.querySelector('.clearfix #signup-btn');
const usernameSignup = document.querySelector('.signup-form .username');
const emailSignup = document.querySelector('.signup-form .email');
const passwordSignup = document.querySelector('.signup-form .password');

    
signupBtn.addEventListener('click', (e)=>{
    e.preventDefault()

    fetch('/sign-up', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
            username: usernameSignup.value,
            email: emailSignup.value,
            password: passwordSignup.value
        })

    }).then(data => data.json())
    .then (data =>{
        if (data.message === 'Registered successfully!'){
        window.location.href = '/details';
        usernameSignup.value = '';
        emailSignup.value = '';
        passwordSignup.value = '';

        }
        else if (data.message === 'The email exists login instead!') {
            swal("ERROR!", data.message, "error");

        }
        else {
            swal("ERROR!", 'server error', "error");   //server error 
        }
    })
    .catch(err => console.log(err))
    
})

// login
const loginBtn = document.querySelector('.login-form .clearfix #login-btn');
const emailLogin = document.querySelector('.login-form .email');
const passwordLogin = document.querySelector('.login-form .password');

loginBtn.addEventListener('click', (e)=>{
    e.preventDefault()

    fetch('/log-in', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
            email: emailLogin.value,
            password: passwordLogin.value
        })

    })    
    .then(data => data.json())
    .then(data => {
        if(data.message === 'login successfully!'){
            window.location.href = '/details';
            emailLogin.value = '';
            passwordLogin.value = '';
        }
        else if (data.message === 'The email does not exist! signup insted'){
            swal("ERROR!", data.message, "error");
        }
        else if (data.message === 'please write a correct password' ){
            swal("ERROR!", data.message, "error");
        }
        else {
            swal("ERROR!", 'server error', "error");   //server error 

        }
    })
    .catch(err => console.log(err))

    


})

         //get posts
const contPost = document.querySelector('.contPost');

fetch('/posts')
.then(data => data.json())
.then(data => {
    data.forEach((post)=>{

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
    })

})
.catch(err => console.log(err))


