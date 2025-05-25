document.getElementById('fetch-users').addEventListener('click', async () => {
    try {
        const response = await fetch('http://clombv4-env.eba-k6padzhd.us-west-2.elasticbeanstalk.com/api/users');

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const users = await response.json();
        console.log('Users:', users);

        // Get the user list container
        const getObjectsList = document.getElementById('get-objects-list');
        getObjectsList.innerHTML = ''; // Clear previous entries

        users.forEach(user => {
            const li = document.createElement('li');
            const ul = document.createElement('ul');

            li.textContent = `User ID: ${user.id}`;


            const firstNameLi = document.createElement('li');
            firstNameLi.textContent = `First Name: ${user.firstName}`;

            const lastNameLi = document.createElement('li');
            lastNameLi.textContent = `Last Name: ${user.lastName}`;

            const emailLi = document.createElement('li');
            emailLi.textContent = `Email: ${user.email}`;

            // add consts for: gender, username, password, chalk, shoes, createDate, and updateDate

            const genderLi = document.createElement('li');
            genderLi.textContent = `Gender: ${user.gender}`;

            const usernameLi = document.createElement('li');
            usernameLi.textContent = `Username: ${user.username}`;

            const chalkLi = document.createElement('li');
            chalkLi.textContent = `Chalk: ${user.chalk}`;

            const shoesLi = document.createElement('li');
            shoesLi.textContent = `Shoes: ${user.shoes}`;

            const userCreateDateLi = document.createElement('li');
            userCreateDateLi.textContent = `Creation Date: ${user.userCreateDate}`;

            const userUpdateDateLi = document.createElement('li');
            userUpdateDateLi.textContent = `Update Date: ${user.userUpdateDate}`;



            ul.appendChild(firstNameLi);
            ul.appendChild(lastNameLi);
            ul.appendChild(emailLi);
            ul.appendChild(genderLi);
            ul.appendChild(usernameLi);
            ul.appendChild(chalkLi);
            ul.appendChild(shoesLi);
            ul.appendChild(userCreateDateLi);
            ul.appendChild(userUpdateDateLi);


            li.appendChild(ul);

       
            getObjectsList.appendChild(li);

            
        });


    } catch (error) {
        console.error('Error:', error.message);
        document.getElementById('get-request-error-message').textContent = "Error fetching users.";
        document.getElementById('get-request-error-message').style.color = "red";
    }
});



document.getElementById('fetch-gyms').addEventListener('click', async () => {
    try {
        const response = await fetch('http://clombv4-env.eba-k6padzhd.us-west-2.elasticbeanstalk.com/api/gyms');

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const gyms = await response.json();
        console.log('Gyms:', gyms);

        // Get the gym list container
        const getObjectsList = document.getElementById('get-objects-list');
        getObjectsList.innerHTML = ''; // Clear previous entries

        gyms.forEach(gym => {
            const li = document.createElement('li');
            const ul = document.createElement('ul');

            li.textContent = `Gym ID: ${gym.id}`;

            const gymNameLi = document.createElement('li');
            gymNameLi.textContent = `Gym Name: ${gym.gymName}`;

            const gymAddressLi = document.createElement('li');
            gymAddressLi.textContent = `Gym Address: ${gym.gymAddress}`;

            const gymCreateDateLi = document.createElement('li');
            gymCreateDateLi.textContent = `Creation Date: ${gym.gymCreateDate}`;

            const gymUpdateDateLi = document.createElement('li');
            gymUpdateDateLi.textContent = `Update Date: ${gym.gymUpdateDate}`;



            ul.appendChild(gymNameLi);
            ul.appendChild(gymAddressLi);
            ul.appendChild(gymCreateDateLi);
            ul.appendChild(gymUpdateDateLi);


            li.appendChild(ul);

       
            getObjectsList.appendChild(li);

            
        });


    } catch (error) {
        console.error('Error:', error.message);
        document.getElementById('get-request-error-message').textContent = "Error fetching gyms.";
        document.getElementById('get-request-error-message').style.color = "red";
    }
});


document.getElementById('fetch-routes').addEventListener('submit', async (event) => {
    
    event.preventDefault();
    try {
        let gymId = document.getElementById('get-route-gym-id').value;

        const response = await fetch('http://clombv4-env.eba-k6padzhd.us-west-2.elasticbeanstalk.com/api/routes/gym/'+gymId);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const routes = await response.json();
        console.log('Routes:', routes);

        // Get the route list container
        const getObjectsList = document.getElementById('get-objects-list');
        getObjectsList.innerHTML = ''; // Clear previous entries

        routes.forEach(route => {
            const li = document.createElement('li');
            const ul = document.createElement('ul');

            li.textContent = `Route ID: ${route.id}`;

            const routeGradeLi = document.createElement('li');
            routeGradeLi.textContent = `Route Grade: ${route.grade}`;

            const routeSetterLi = document.createElement('li');
            routeSetterLi.textContent = `Route Setter: ${route.setter}`;

            const routeColorLi = document.createElement('li');
            routeColorLi.textContent = `Route Color: ${route.color}`;

            const gymIdLi = document.createElement('li');
            gymIdLi.textContent = `Gym ID: ${route.gymId}`;

            const routeCreateDateLi = document.createElement('li');
            routeCreateDateLi.textContent = `Creation Date: ${route.routeCreateDate}`;

            const routeUpdateDateLi = document.createElement('li');
            routeUpdateDateLi.textContent = `Update Date: ${route.routeUpdateDate}`;



            ul.appendChild(routeGradeLi);
            ul.appendChild(routeSetterLi);
            ul.appendChild(routeColorLi);
            ul.appendChild(gymIdLi);
            ul.appendChild(routeCreateDateLi);
            ul.appendChild(routeUpdateDateLi);


            li.appendChild(ul);

       
            getObjectsList.appendChild(li);

            
        });


    } catch (error) {
        console.error('Error:', error.message);
        document.getElementById('get-request-error-message').textContent = "Error fetching routes.";
        document.getElementById('get-request-error-message').style.color = "red";
    }
});


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
        document.getElementById('get-request-error-message').textContent = "Error fetching climb details.";
        document.getElementById('get-request-error-message').style.color = "red";
    }
});


/* 
POST REQS START HERE
*/

const userCreationForm = document.getElementById('user-creation-form');

userCreationForm.addEventListener('submit', async (event) => {

    event.preventDefault();

    let firstNameInput = document.getElementById('first-name');
    let lastNameInput = document.getElementById('last-name');
    let emailInput = document.getElementById('email');
    let shoesInput = document.getElementById('shoes');
    let chalkInput = document.getElementById('chalk');
    let genderInput = document.getElementById('gender');
    let usernameInput = document.getElementById('username');
    let passwordInput = document.getElementById('password');
  
    let newUser = {};
    newUser.firstName = firstNameInput.value;
    newUser.lastName = lastNameInput.value;
    newUser.email = emailInput.value;
    newUser.shoes = shoesInput.value;
    newUser.chalk = chalkInput.value;
    newUser.gender = genderInput.value;
    newUser.username = usernameInput.value;
    newUser.password = passwordInput.value;

    console.log(newUser);

    try {
      const response = await fetch('http://clombv4-env.eba-k6padzhd.us-west-2.elasticbeanstalk.com/api/users', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(newUser)
      });

      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Response:', result);

      document.getElementById('user-message').textContent = "User successfully registered!";
      document.getElementById('user-message').style.color = "green";

      // Optional: Clear form fields after successful submission
      event.target.reset();
  } catch (error) {
      console.error('Error:', error.message);
      document.getElementById('user-message').textContent = "Error submitting form. Try again.";
      document.getElementById('user-message').style.color = "red";
  }

    // output.innerHTML += '<li>'+newUser.firstName+'</li>';
    // output.innerHTML += '<li>'+newUser.lastName+'</li>';
    // output.innerHTML += '<li>'+newUser.email+'</li>';
    // output.innerHTML += '<li>'+newUser.shoes+'</li>';
    // output.innerHTML += '<li>'+newUser.chalk+'</li>';
    // output.innerHTML += '<li>'+newUser.gender+'</li>';
    // output.innerHTML += '<li>'+newUser.username+'</li>';
    // output.innerHTML += '<li>'+newUser.password+'</li>';

});


const gymCreationForm = document.getElementById('gym-creation-form');

let gymNameInput = document.getElementById('gym-name');
let gymAddressInput = document.getElementById('gym-address');


gymCreationForm.addEventListener('submit', async (event) => {

    event.preventDefault();
  
  	// output.innerHTML = "";

    let newGym = {};
    newGym.gymName = gymNameInput.value;
    newGym.gymAddress = gymAddressInput.value;

    console.log(newGym);

    try {
      const response = await fetch('http://clombv4-env.eba-k6padzhd.us-west-2.elasticbeanstalk.com/api/gyms', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(newGym)
      });

      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Response:', result);

      document.getElementById('gym-message').textContent = "Gym successfully registered!";
      document.getElementById('gym-message').style.color = "green";

      // Optional: Clear form fields after successful submission
      event.target.reset();
  } catch (error) {
      console.error('Error:', error.message);
      document.getElementById('gym-message').textContent = "Error submitting form. Try again.";
      document.getElementById('gym-message').style.color = "red";
  }

    // output.innerHTML += '<li>'+newUser.firstName+'</li>';
    // output.innerHTML += '<li>'+newUser.lastName+'</li>';
    // output.innerHTML += '<li>'+newUser.email+'</li>';
    // output.innerHTML += '<li>'+newUser.shoes+'</li>';
    // output.innerHTML += '<li>'+newUser.chalk+'</li>';
    // output.innerHTML += '<li>'+newUser.gender+'</li>';
    // output.innerHTML += '<li>'+newUser.username+'</li>';
    // output.innerHTML += '<li>'+newUser.password+'</li>';
  });



  const routeCreationForm = document.getElementById('route-creation-form');

  let routeGradeInput = document.getElementById('route-grade');
  let routeColorInput= document.getElementById('route-color');
  let routeSetterInput = document.getElementById('route-setter');
  let gymIdInput= document.getElementById('gym-id');

    routeCreationForm.addEventListener('submit', async (event) => {

      event.preventDefault();
    
      // output.innerHTML = "";
  
      let newRoute = {};
      newRoute.grade = routeGradeInput.value;
      newRoute.setter = routeSetterInput.value;
      newRoute.color = routeColorInput.value;
      newRoute.gymId = gymIdInput.value;
  
      console.log(newRoute);
  
      try {
        const response = await fetch('http://clombv4-env.eba-k6padzhd.us-west-2.elasticbeanstalk.com/api/routes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newRoute)
        });
  
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const result = await response.json();
        console.log('Response:', result);
  
        document.getElementById('route-message').textContent = "Route successfully registered!";
        document.getElementById('route-message').style.color = "green";
  
        // Optional: Clear form fields after successful submission
        event.target.reset();
    } catch (error) {
        console.error('Error:', error.message);
        document.getElementById('route-message').textContent = "Error submitting form. Try again.";
        document.getElementById('route-message').style.color = "red";
    }
});


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

    document.getElementById('climbDetails-message').textContent = "Climb Details successfully registered!";
    document.getElementById('climbDetails-message').style.color = "green";

    // Optional: Clear form fields after successful submission
    event.target.reset();
} catch (error) {
    console.error('Error:', error.message);
    document.getElementById('climbDetails-message').textContent = "Error submitting form. Try again.";
    document.getElementById('climbDetails-message').style.color = "red";
}
});



/* 
PUT REQS START HERE
*/

let userUpdateForm = document.getElementById('user-update-form');

userUpdateForm.addEventListener('submit', async (event) => {

    event.preventDefault();

    let userIdInput = document.getElementById('update-user-id');
    let firstNameInput = document.getElementById('update-first-name');
    let lastNameInput = document.getElementById('update-last-name');
    let emailInput = document.getElementById('update-email');
    let shoesInput = document.getElementById('update-shoes');
    let chalkInput = document.getElementById('update-chalk');
    let genderInput = document.getElementById('update-gender');
    let usernameInput = document.getElementById('update-username');
    let passwordInput = document.getElementById('update-password');
  
    let updatedUser = {};
    updatedUser.firstName = firstNameInput.value;
    updatedUser.lastName = lastNameInput.value;
    updatedUser.email = emailInput.value;
    updatedUser.shoes = shoesInput.value;
    updatedUser.chalk = chalkInput.value;
    updatedUser.gender = genderInput.value;
    updatedUser.username = usernameInput.value;
    updatedUser.password = passwordInput.value;

    console.log(updatedUser);

    try {
      const response = await fetch('http://clombv4-env.eba-k6padzhd.us-west-2.elasticbeanstalk.com/api/users/'+userIdInput.value, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(updatedUser)
      });

      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Response:', result);

      document.getElementById('update-message').textContent = "User successfully updated!";
      document.getElementById('update-message').style.color = "green";

      // Optional: Clear form fields after successful submission
      event.target.reset();
  } catch (error) {
      console.error('Error:', error.message);
      document.getElementById('update-message').textContent = "Error submitting form. Try again.";
      document.getElementById('update-message').style.color = "red";
  }

});

const gymUpdateForm = document.getElementById('gym-update-form');

gymUpdateForm.addEventListener('submit', async (event) => {

    event.preventDefault();

    let gymIdInput = document.getElementById('update-gym-id');
    let gymNameInput = document.getElementById('update-gym-name');
    let gymAddressInput = document.getElementById('update-gym-address');
  
  	// output.innerHTML = "";

    let updatedGym = {};
    updatedGym.gymName = gymNameInput.value;
    updatedGym.gymAddress = gymAddressInput.value;

    console.log(updatedGym);

    try {
      const response = await fetch('http://clombv4-env.eba-k6padzhd.us-west-2.elasticbeanstalk.com/api/gyms/'+gymIdInput.value, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(updatedGym)
      });

      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Response:', result);

      document.getElementById('update-message').textContent = "Gym successfully updated!";
      document.getElementById('update-message').style.color = "green";

      // Optional: Clear form fields after successful submission
      event.target.reset();
  } catch (error) {
      console.error('Error:', error.message);
      document.getElementById('update-message').textContent = "Error submitting form. Try again.";
      document.getElementById('update-message').style.color = "red";
  }


  });

  const routeUpdateForm = document.getElementById('route-update-form')

    routeUpdateForm.addEventListener('submit', async (event) => {

      event.preventDefault();

      let routeIdInput = document.getElementById('update-route-id');
      let routeGradeInput = document.getElementById('update-route-grade');
      let routeColorInput= document.getElementById('update-route-color');
      let routeSetterInput = document.getElementById('update-route-setter');
    
      // output.innerHTML = "";
  
      let updatedRoute = {};
      updatedRoute.grade = routeGradeInput.value;
      updatedRoute.setter = routeSetterInput.value;
      updatedRoute.color = routeColorInput.value;
      updatedRoute.gymId = gymIdInput.value;
  
      console.log(updatedRoute);
  
      try {
        const response = await fetch('http://clombv4-env.eba-k6padzhd.us-west-2.elasticbeanstalk.com/api/routes/'+routeIdInput.value, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedRoute)
        });
  
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const result = await response.json();
        console.log('Response:', result);
  
        document.getElementById('update-message').textContent = "Route successfully updated!";
        document.getElementById('update-message').style.color = "green";
  
        // Optional: Clear form fields after successful submission
        event.target.reset();
    } catch (error) {
        console.error('Error:', error.message);
        document.getElementById('update-message').textContent = "Error submitting form. Try again.";
        document.getElementById('update-message').style.color = "red";
    }
});

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

    document.getElementById('update-message').textContent = "Climb Details successfully updated!";
    document.getElementById('update-message').style.color = "green";

    // Optional: Clear form fields after successful submission
    event.target.reset();
} catch (error) {
    console.error('Error:', error.message);
    document.getElementById('update-message').textContent = "Error submitting form. Try again.";
    document.getElementById('update-message').style.color = "red";
}
});

/* 
DELETE REQS START HERE
*/

const userDeleteForm = document.getElementById('user-delete-form');

userDeleteForm.addEventListener('submit', async (event) => {

  event.preventDefault();

  let userIdInput = document.getElementById('delete-user-id');


  try {
    const response = await fetch('http://clombv4-env.eba-k6padzhd.us-west-2.elasticbeanstalk.com/api/users/'+userIdInput.value, {
        method: 'DELETE'
    });

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.text();
    console.log('Response:', result);

    document.getElementById('delete-message').textContent = "User successfully deleted!";
    document.getElementById('delete-message').style.color = "green";

    // Optional: Clear form fields after successful submission
    event.target.reset();
} catch (error) {
    console.error('Error:', error.message);
    document.getElementById('delete-message').textContent = "Error submitting form. Try again.";
    document.getElementById('delete-message').style.color = "red";
}
});

const routeDeleteForm = document.getElementById('route-delete-form');

routeDeleteForm.addEventListener('submit', async (event) => {

  event.preventDefault();

  let routeIdInput = document.getElementById('delete-route-id');


  try {
    const response = await fetch('http://clombv4-env.eba-k6padzhd.us-west-2.elasticbeanstalk.com/api/routes/'+routeIdInput.value, {
        method: 'DELETE'
    });

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.text();
    console.log('Response:', result);

    document.getElementById('delete-message').textContent = "Route successfully deleted!";
    document.getElementById('delete-message').style.color = "green";

    // Optional: Clear form fields after successful submission
    event.target.reset();
} catch (error) {
    console.error('Error:', error.message);
    document.getElementById('delete-message').textContent = "Error submitting form. Try again.";
    document.getElementById('delete-message').style.color = "red";
}
});

const gymDeleteForm = document.getElementById('gym-delete-form');

gymDeleteForm.addEventListener('submit', async (event) => {

  event.preventDefault();

  let gymIdInput = document.getElementById('delete-gym-id');


  try {
    const response = await fetch('http://clombv4-env.eba-k6padzhd.us-west-2.elasticbeanstalk.com/api/gyms/'+gymIdInput.value, {
        method: 'DELETE'
    });

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.text();
    console.log('Response:', result);

    document.getElementById('delete-message').textContent = "Gym successfully deleted!";
    document.getElementById('delete-message').style.color = "green";

    // Optional: Clear form fields after successful submission
    event.target.reset();
} catch (error) {
    console.error('Error:', error.message);
    document.getElementById('delete-message').textContent = "Error submitting form. Try again.";
    document.getElementById('delete-message').style.color = "red";
}
});

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

    document.getElementById('delete-message').textContent = "Climb Details successfully deleted!";
    document.getElementById('delete-message').style.color = "green";

    // Optional: Clear form fields after successful submission
    event.target.reset();
} catch (error) {
    console.error('Error:', error.message);
    document.getElementById('delete-message').textContent = "Error submitting form. Try again.";
    document.getElementById('delete-message').style.color = "red";
}
});

