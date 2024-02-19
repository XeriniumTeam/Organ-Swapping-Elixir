const cardContainer = document.getElementById("cardContainer");

let email_id = document.getElementById("spanEmailID").innerText;

email_id = email_id.split(": ")[1];

getSwaps = async (email_id) => {
    const response = await fetch(`http://localhost:5000/user/reg/email/${email_id}`, {
        method:'GET'
    })

    const user = await response.json()

    if(user){
        let bld_grp = user["bld_grp"];
        let donor_bld_grp = user["donor"]["donor_bld_grp"]
        console.log(bld_grp);
        console.log(donor_bld_grp);
        const response_2 = await fetch(`http://localhost:5000/user/match/bldgrp/${bld_grp}/dbldgrp/${donor_bld_grp}`, {
            method:'GET'
        });
        const data = await response_2.json();
        console.log(data);
    }
}

getSwaps(email_id);
