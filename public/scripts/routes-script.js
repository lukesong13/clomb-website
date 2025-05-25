//GET

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
        document.getElementById('output-message').textContent = "Error fetching routes.";
        document.getElementById('output-message').style.color = "red";
    }
});

//CREATE

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
  
        document.getElementById('output-message').textContent = "Route successfully registered!";
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
  
        document.getElementById('output-message').textContent = "Route successfully updated!";
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

    document.getElementById('output-message').textContent = "Route successfully deleted!";
    document.getElementById('output-message').style.color = "green";

    // Optional: Clear form fields after successful submission
    event.target.reset();
} catch (error) {
    console.error('Error:', error.message);
    document.getElementById('output-message').textContent = "Error submitting form. Try again.";
    document.getElementById('output-message').style.color = "red";
}
});

