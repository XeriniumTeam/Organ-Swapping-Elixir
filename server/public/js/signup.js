let signupForm = document.getElementById("signup-form");
let ermsg = document.getElementById("error-msg");

// function redirectWithParameters(url, params){
//     console.log("reached here")
//     const form = document.createElement('form');
//     form.method = 'POST';
//     form.action = url

//     for(const key in params){
//         if(params.hasOwnProperty(key)){
//             const input = document.createElement('input')
//             input.type = 'hidden';
//             input.name = key;
//             input.value = params[key];
//             form.appendChild(input);
//         }
//     }

//     document.body.appendChild(form);
//     form.submit();
// }

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new URLSearchParams();

    formData.append('first_name', document.getElementById("first_name").value);
    formData.append('last_name', document.getElementById("last_name").value);
    formData.append('email_id', document.getElementById("email_id").value);
    formData.append('pwd', document.getElementById("pwd").value);
    
    if(re_pwd.value != pwd.value){
        ermsg.innerHTML += `Password Not Matching`;
    }
    else {

        fetch("http://localhost:5000/user/newUser", {
            method: "POST",
            body: formData.toString(),
            headers: {
                'Content-Type':'application/x-www-form-urlencoded'
            }
        }).then((res) => {
            //document.getElementById("response").innerHTML = `<span>${res.body}</span>`;
            // redirectWithParameters("http://localhost:5000/", {
                
            fname =  document.getElementById("first_name").value;
            email = document.getElementById("email_id").value;
            // })
            
            window.location.href= `http://localhost:5000/account/${fname}/${email}`;
            document.getElementById("first_name").value = "";
            document.getElementById("last_name").value = "";
            document.getElementById("email_id").value = "";
            document.getElementById("pwd").value = "";
            document.getElementById("re_pwd").value = "";
        }).catch((err) => {
            console.log(err)
        });
    }
});