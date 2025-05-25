// GET

document.getElementById('fetch-climb-details').addEventListener('submit', async (event) => {
    
    event.preventDefault();
    try {
        let userId = document.getElementById('get-climb-details-user-id').value;

        const response = await fetch('http://clombv4-env.eba-k6padzhd.us-west-2.elasticbeanstalk.com/api/climbDetails/user/'+userId);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const climbDetails = await response.json();
        console.log('Climb Details:', climbDetails);

        // Get the climb details list container
        const getObjectsList = document.getElementById('get-objects-list');
        getObjectsList.innerHTML = ''; // Clear previous entries

        climbDetails.forEach(climbDetail => {
            const li = document.createElement('li');
            const ul = document.createElement('ul');

            li.textContent = `Climb Detail ID: ${climbDetail.id}`;

            const userIdLi = document.createElement('li');
            userIdLi.textContent = `User ID: ${climbDetail.userId}`;

            const routeIdLi = document.createElement('li');
            routeIdLi.textContent = `Route ID: ${climbDetail.routeId}`;

            const gymIdLi = document.createElement('li');
            gymIdLi.textContent = `Gym ID: ${climbDetail.gymId}`;

            const notesLi = document.createElement('li');
            notesLi.textContent = `Notes: ${climbDetail.notes}`;

            const climbDetailCreateDateLi = document.createElement('li');
            climbDetailCreateDateLi.textContent = `Creation Date: ${climbDetail.climbDetailsCreateDate}`;

            const climbDetailUpdateDateLi = document.createElement('li');
            climbDetailUpdateDateLi.textContent = `Update Date: ${climbDetail.climbDetailsUpdateDate}`;



            ul.appendChild(userIdLi);
            ul.appendChild(routeIdLi);
            ul.appendChild(gymIdLi);
            ul.appendChild(notesLi);
            ul.appendChild(climbDetailCreateDateLi);
            ul.appendChild(climbDetailUpdateDateLi);


            li.appendChild(ul);

       
            getObjectsList.appendChild(li);

            
        });


    } catch (error) {
        console.error('Error:', error.message);
        document.getElementById('output-message').textContent = "Error fetching climb details.";
        document.getElementById('output-message').style.color = "red";
    }
});

//CREATE

const climbDetailsCreationForm = document.getElementById('climbDetails-creation-form');

  let climbDetailsUserIdInput = document.getElementById('climbDetails-userId');
  let climbDetailsRouteIdInput = document.getElementById('climbDetails-routeId');
  let climbDetailsGymIdInput = document.getElementById('climbDetails-gymId');
  let climbDetailsNotesInput = document.getElementById('climbDetails-notes');
  


climbDetailsCreationForm.addEventListener('submit', async (event) => {

  event.preventDefault();

  // output.innerHTML = "";

  let newClimbDetails = {};
  newClimbDetails.userId = climbDetailsUserIdInput.value;
  newClimbDetails.routeId = climbDetailsRouteIdInput.value;
  newClimbDetails.gymId = climbDetailsGymIdInput.value;
  newClimbDetails.notes = climbDetailsNotesInput.value;

  console.log(newClimbDetails);

  try {
    const response = await fetch('http://clombv4-env.eba-k6padzhd.us-west-2.elasticbeanstalk.com/api/climbDetails', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newClimbDetails)
    });

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    console.log('Response:', result);

    document.getElementById('output-message').textContent = "Climb Details successfully registered!";
    document.getElementById('output-message').style.color = "green";

    // Optional: Clear form fields after successful submission
    event.target.reset();
} catch (error) {
    console.error('Error:', error.message);
    document.getElementById('output-message').textContent = "Error submitting form. Try again.";
    document.getElementById('output-message').style.color = "red";
}
});

//UPDATE

const climbDetailsUpdateForm = document.getElementById('climbDetails-update-form');

climbDetailsUpdateForm.addEventListener('submit', async (event) => {

  event.preventDefault();

  let climbDetailsIdInput = document.getElementById('update-climbDetails-id');
  let climbDetailsUserIdInput = document.getElementById('update-climbDetails-userId');
  let climbDetailsRouteIdInput = document.getElementById('update-climbDetails-routeId');
  let climbDetailsGymIdInput = document.getElementById('update-climbDetails-gymId');
  let climbDetailsNotesInput = document.getElementById('update-climbDetails-notes');

  // output.innerHTML = "";

  let updatedClimbDetails = {};
 updatedClimbDetails.climbDetailsId = climbDetailsIdInput.value;
  updatedClimbDetails.routeId = climbDetailsRouteIdInput.value;
  updatedClimbDetails.gymId = climbDetailsGymIdInput.value;
  updatedClimbDetails.notes = climbDetailsNotesInput.value;

  console.log(updatedClimbDetails);

  try {
    const response = await fetch('http://clombv4-env.eba-k6padzhd.us-west-2.elasticbeanstalk.com/api/climbDetails/'+climbDetailsIdInput.value, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedClimbDetails)
    });

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    console.log('Response:', result);

    document.getElementById('output-message').textContent = "Climb Details successfully updated!";
    document.getElementById('output-message').style.color = "green";

    // Optional: Clear form fields after successful submission
    event.target.reset();
} catch (error) {
    console.error('Error:', error.message);
    document.getElementById('output-message').textContent = "Error submitting form. Try again.";
    document.getElementById('output-message').style.color = "red";
}
});

//DELETE

const climbDetailsDeleteForm = document.getElementById('climb-details-delete-form');

climbDetailsDeleteForm.addEventListener('submit', async (event) => {

  event.preventDefault();

  let climbDetailsIdInput = document.getElementById('delete-climb-detail-id');


  try {
    const response = await fetch('http://clombv4-env.eba-k6padzhd.us-west-2.elasticbeanstalk.com/api/climbDetails/'+climbDetailsIdInput.value, {
        method: 'DELETE'
    });

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.text();
    console.log('Response:', result);

    document.getElementById('output-message').textContent = "Climb Details successfully deleted!";
    document.getElementById('output-message').style.color = "green";

    // Optional: Clear form fields after successful submission
    event.target.reset();
} catch (error) {
    console.error('Error:', error.message);
    document.getElementById('output-message').textContent = "Error submitting form. Try again.";
    document.getElementById('output-message').style.color = "red";
}
});


