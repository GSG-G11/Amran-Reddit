//handle logout 
const logoutBtn = document.querySelector('.logout');


logoutBtn.addEventListener('click', (e) =>{
    fetch('/logout')
    .then(data => data.json())
    .then(data => window.location.href = '/')
    .catch(err => console.log(err))
})