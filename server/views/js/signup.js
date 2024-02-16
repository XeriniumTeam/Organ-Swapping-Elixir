let signupForm = document.getElementById("signup-form");
let ermsg = document.getElementById("error-msg");


signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new URLSearchParams();

    formData.append('first_name', document.getElementById("first_name").value);
    formData.append('last_name', document.getElementById("last_name").value);
    formData.append('email_id', document.getElementById("email_id").value);
    formData.append('pwd', document.getElementById("pwd").value);
    
    if(re_pwd.value != pwd.value){
        ermsg.innerHTML += `<span class="error-red">Password Not Matching</span>`;
    }
    else {

        fetch("http://localhost:5000/user/newUser", {
            method: "POST",
            body: formData.toString(),
            headers: {
                'Content-Type':'application/x-www-form-urlencoded'
            }
        }).then((res) => {
            document.getElementById("first_name").value = "";
            document.getElementById("last_name").value = "";
            document.getElementById("email_id").value = "";
            document.getElementById("pwd").value = "";
            document.getElementById("re_pwd").value = "";
            //document.getElementById("response").innerHTML = `<span>${res.body}</span>`;
        }).catch((err) => {
            console.log(err)
        });
    }
});