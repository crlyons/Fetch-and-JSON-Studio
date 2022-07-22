// TODO: add code here
window.addEventListener("load", () => {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
    response.json().then(function(json){
        // console.log(json);
        const container = this.document.getElementById("container");
          for(astronaut of json){
            container.innerHTML+=`
            <div class="astronaut">
                <div class="bio">
                    <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                    <ul>
                        <li>Hours in space: ${astronaut.hoursInSpace}</li>
                        <li>Active: ${astronaut.active}</li>
                        <li>Skills: ${astronaut.skills.join(", ")}</li>
                    </ul>
                </div>
                <img class="avatar" src="${astronaut.picture}">
            </div>`
        }
        //  for(let i=0; i <json.length; i++){
        //     container.innerHTML+=`
        //     <div class="astronaut">
        //          <div class="bio">
        //             <h3>${json[i].firstName} ${json[i].lastName}</h3>
        //             <ul>
        //                 <li>Hours in space: ${json[i].hoursInSpace}</li>
        //                 <li>Active: ${json[i].active}</li>
        //                 <li>Skills: ${json[i].skills}</li>
        //             </ul>
        //         </div>
        //         <img class="avatar" src="${json[i].picture}">
        //     </div>`

            // if ( json.active == "true")
        // }
         })
    })
})

