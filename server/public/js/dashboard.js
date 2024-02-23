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

        if (data && data.length > 0) {
            cardContainer.innerHTML = "";
            for(let i = 0; i < data.length; i++){
                cardContainer.innerHTML += `
                <div class="card">
                    <span class="card-title">Donor</span>
                    <p class="card-text">Name: ${data[i]["donor"]["donor_first_name"]}</p>
                    <p class="card-text">Organ: ${data[i]["donor"]["donor_organ"]}</p>
                    <p class="card-text">Age: ${data[i]["donor"]["donor_age"]}</p>
                    <p class="card-text">Blood Group: ${data[i]["donor"]["donor_bld_grp"]}</p>
                    <div class="card-decor"></div>
                </div>`;
            }
        } else {
            cardContainer.innerHTML = `<p class="no-data">No data available</p>`;
        }
    }
}

getSwaps(email_id);
