//GET

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
        document.getElementById('output-message').textContent = "Error fetching gyms.";
        document.getElementById('output-message').style.color = "red";
    }
});

//CREATE

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

      document.getElementById('output-message').textContent = "Gym successfully registered!";
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

  const gymUpdateForm = document.getElementById('gym-update-form');

gymUpdateForm.addEventListener('submit', async (event) => {

    event.preventDefault();

    let gymIdInput = document.getElementById('update-gym-id');
    let gymNameInput = document.getElementById('update-gym-name');
    let gymAddressInput = document.getElementById('update-gym-address');

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

      document.getElementById('output-message').textContent = "Gym successfully updated!";
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
  
      document.getElementById('output-message').textContent = "Gym successfully deleted!";
      document.getElementById('output-message').style.color = "green";
  
      // Optional: Clear form fields after successful submission
      event.target.reset();
  } catch (error) {
      console.error('Error:', error.message);
      document.getElementById('output-message').textContent = "Error submitting form. Try again.";
      document.getElementById('output-message').style.color = "red";
  }
  });
