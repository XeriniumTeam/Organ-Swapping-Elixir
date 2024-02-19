const cardContainer = document.getElementById("cardContainer");

cardContainer.addEventListener('load', async (e)=> {

        const response = await fetch("http://localhost:5000/user/match/bldgrp/A/dbldgrp/O", {
            method:'GET'
        });

        const users = await response.json();

        console.log(users);
})