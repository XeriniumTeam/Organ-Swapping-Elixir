const loginForm = document.getElementById("loginForm");
const ermsg = document.getElementById("error-msg");

// const login_email = document.getElementById("login_email");
// const login_password = document.getElementById("login_password")

const elems = document.getElementsByTagName("input");

for(elem of elems){
    elem.addEventListener("keypress", (e) => {
        console.log("Event Occurred");
        ermsg.innerHTML = "";
    });
}

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email_id = document.getElementById("login_email").value;

    const response = await fetch(`http://localhost:5000/user/email/${email_id}`, {
        method: 'GET'
    });

    const data = await response.json();
    if(!data){
        ermsg.innerHTML = "No User Found With This Email ID";
    }
    else {
        
        let pwd = data["pwd"];
        let fname = data["first_name"];
    
        if(pwd == document.getElementById("login_password").value){
            window.location.href= `http://localhost:5000/account/${fname}`;
            document.getElementById("login_email").value = "";
            document.getElementById("login_password").value = "";
        }
        else {
            ermsg.innerHTML = "Incorrect Password.";
        }

    }
})

