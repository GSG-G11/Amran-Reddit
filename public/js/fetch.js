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
    .then(data => window.location.href = '/details')
    .catch(err => console.log(err))

    
    usernameSignup.value = '';
    emailSignup.value = '';
    passwordSignup.value = '';
    
    // swal('Good job!', 'The user added successfuly', 'success');

})

// login
const loginBtn = document.querySelector('.login-form .clearfix #login-btn');
const emailLogin = document.querySelector('.login-form .email');
const passwordLogin = document.querySelector('.login-form .password');

loginBtn.addEventListener('click', (e)=>{
    console.log('cv');
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
    .then(data => window.location.href = '/details')

    .catch(err => console.log(err))

    
    emailLogin.value = '';
    passwordLogin.value = '';

    // swal('Good job!', 'The user added successfuly', 'success');

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
        const h1 = document.createElement('h1');
        const h3 = document.createElement('h3');
        h1.innerText = post.title;
        h3.innerText = post.content;
    
        postDiv.append(h1, h3);
    
        contPost.append(postDiv);
    })

})
.catch(err => console.log(err))

