const loginForm = document.getElementById("loginForm");



loginForm.addEventListener('submit', (e) => {
    e.preventDefault;
    loginForm.method = "POST";
    const email_id = document.getElementById("login_email").value;

    fetch(`http://localhost:5000/user/${email_id}`, {
        method: 'GET',
        // headers: {
        //     'Content-Type':'application/x-www-form-urlencoded'
        // }
    }).then((res) => {
        console.log(res);
    });
})