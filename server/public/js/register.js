const regForm = document.getElementById("registrationForm");

regForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new URLSearchParams();

    const email_id = document.getElementById("emailId").value;

    formData.append("email_id", document.getElementById("emailId").value);
    formData.append("aadhar_no", document.getElementById("aadharNo").value);
    formData.append("organ", document.getElementById("organ").value);
    formData.append("age", document.getElementById("age").value);
    formData.append("bld_grp", document.getElementById("bloodGroup").value);
    formData.append("donor_fname", document.getElementById("donorFirstName").value);
    formData.append("donor_age", document.getElementById("donorAge").value);
    formData.append("donor_aadhar_card_no", document.getElementById("donorAadharCardNo").value);
    formData.append("donor_organ", document.getElementById("donorOrgan").value);
    formData.append("donor_bld_grp", document.getElementById("donorBloodGroup").value);

    const response = await fetch("http://localhost:5000/user/registerUser", {
        method: 'POST',
        body: formData.toString(),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })

    if(response){

        const response_2 = await fetch(`http://localhost:5000/user/email/${email_id}`, {
            method: 'GET'
        });

        const data = await response_2.json();
        console.log(data);

        window.location.href = `http://localhost:5000/dashboard/${data["first_name"]}/${data["email_id"]}`;
    }
})