const loginForm = document.getElementById("loginForm");

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email_id = document.getElementById("login_email").value;

    const response = await fetch(`http://localhost:5000/user/email/${email_id}`, {
        method: 'GET'
    });

    const data = await response.json();
    
    let pwd = data["pwd"];
    let fname = data["first_name"];

    if(pwd == document.getElementById("login_password").value){
        window.location.href= `http://localhost:5000/account/${fname}`;
        document.getElementById("login_email").value = "";
        document.getElementById("login_password").value = "";
    }
})