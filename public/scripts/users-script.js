//GET

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

        //TABLE START
        const tableBody = document.getElementById('users-table-body');

        tableBody.innerHTML="";

        users.forEach(user => {
            const row = document.createElement('tr');
          	
          

            const idTd = document.createElement('td');
                idTd.textContent = user.id;
        
            const firstNameTd = document.createElement('td');
            firstNameTd.textContent = user.firstName;

            const lastNameTd = document.createElement('td');
            lastNameTd.textContent = user.lastName;

            const emailTd = document.createElement('td');
            emailTd.textContent = user.email;

            const genderTd = document.createElement('td');
            genderTd.textContent = user.gender;

            const usernameTd = document.createElement('td');
            usernameTd.textContent = user.username;

            const chalkTd = document.createElement('td');
            chalkTd.textContent = user.chalk;

            const shoesTd = document.createElement('td');
            shoesTd.textContent = user.shoes;

            const createDateTd = document.createElement('td');
            createDateTd.textContent = user.userCreateDate;

            const updateDateTd = document.createElement('td');
            updateDateTd.textContent = user.userUpdateDate;


            row.appendChild(idTd);
            row.appendChild(firstNameTd);
            row.appendChild(lastNameTd);
            row.appendChild(emailTd);
            row.appendChild(genderTd);
            row.appendChild(usernameTd);
            row.appendChild(chalkTd);
            row.appendChild(shoesTd);
            row.appendChild(createDateTd);
            row.appendChild(updateDateTd);

          	tableBody.appendChild(row);

            document.getElementById('users-table').style.display = 'table';

            //TABLE END

            // const li = document.createElement('li');
            // const ul = document.createElement('ul');

            // li.textContent = `User ID: ${user.id}`;


            // const firstNameLi = document.createElement('li');
            // firstNameLi.textContent = `First Name: ${user.firstName}`;

            // const lastNameLi = document.createElement('li');
            // lastNameLi.textContent = `Last Name: ${user.lastName}`;

            // const emailLi = document.createElement('li');
            // emailLi.textContent = `Email: ${user.email}`;

            // // add consts for: gender, username, password, chalk, shoes, createDate, and updateDate

            // const genderLi = document.createElement('li');
            // genderLi.textContent = `Gender: ${user.gender}`;

            // const usernameLi = document.createElement('li');
            // usernameLi.textContent = `Username: ${user.username}`;

            // const chalkLi = document.createElement('li');
            // chalkLi.textContent = `Chalk: ${user.chalk}`;

            // const shoesLi = document.createElement('li');
            // shoesLi.textContent = `Shoes: ${user.shoes}`;

            // const userCreateDateLi = document.createElement('li');
            // userCreateDateLi.textContent = `Creation Date: ${user.userCreateDate}`;

            // const userUpdateDateLi = document.createElement('li');
            // userUpdateDateLi.textContent = `Update Date: ${user.userUpdateDate}`;



            // ul.appendChild(firstNameLi);
            // ul.appendChild(lastNameLi);
            // ul.appendChild(emailLi);
            // ul.appendChild(genderLi);
            // ul.appendChild(usernameLi);
            // ul.appendChild(chalkLi);
            // ul.appendChild(shoesLi);
            // ul.appendChild(userCreateDateLi);
            // ul.appendChild(userUpdateDateLi);


            // li.appendChild(ul);

       
            // getObjectsList.appendChild(li);

            
        });


    } catch (error) {
        console.error('Error:', error.message);
        document.getElementById('output-message').textContent = "Error fetching users.";
        document.getElementById('output-message').style.color = "red";
    }
});

//CREATE

const openCreateUserModalBtn = document.getElementById('open-create-user-modal');
const closeCreateUserModalBtn = document.getElementById('close-create-user-modal');
const createUserModal = document.getElementById('create-user-modal');

// Open modal
openCreateUserModalBtn.addEventListener('click', () => {
    createUserModal.style.display = 'block';
  });
  
  // Close modal
  closeCreateUserModalBtn.addEventListener('click', () => {
    createUserModal.style.display = 'none';
  });


  // Close modal if user clicks outside the form content
window.addEventListener('click', (e) => {
    if (e.target === createUserModal) {
      createUserModal.style.display = 'none';
    }
  });

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

      document.getElementById('output-message').textContent = "User successfully registered!";
      document.getElementById('output-message').style.color = "green";

      // Optional: Clear form fields after successful submission
      event.target.reset();
      createUserModal.style.display = 'none';
  } catch (error) {
      console.error('Error:', error.message);
      document.getElementById('output-message').textContent = "Error submitting form. Try again.";
      document.getElementById('output-message').style.color = "red";
  }

});

//UPDATE

const openUpdateUserModalBtn = document.getElementById('open-update-user-modal');
const closeUpdateUserModalBtn = document.getElementById('close-update-user-modal');
const updateUserModal = document.getElementById('update-user-modal');

// Open modal
openUpdateUserModalBtn.addEventListener('click', () => {
    updateUserModal.style.display = 'block';
  });
  
  // Close modal
  closeUpdateUserModalBtn.addEventListener('click', () => {
    updateUserModal.style.display = 'none';
  });


  // Close modal if user clicks outside the form content
window.addEventListener('click', (e) => {
    if (e.target === updateUserModal) {
      updateUserModal.style.display = 'none';
    }
  });

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

      document.getElementById('output-message').textContent = "User successfully updated!";
      document.getElementById('output-message').style.color = "green";

      // Optional: Clear form fields after successful submission
      event.target.reset();
      updateUserModal.style.display = 'none';
  } catch (error) {
      console.error('Error:', error.message);
      document.getElementById('output-message').textContent = "Error submitting form. Try again.";
      document.getElementById('output-message').style.color = "red";
  }

});

//DELETE

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

    document.getElementById('output-message').textContent = "User successfully deleted!";
    document.getElementById('output-message').style.color = "green";

    // Optional: Clear form fields after successful submission
    event.target.reset();
} catch (error) {
    console.error('Error:', error.message);
    document.getElementById('output-message').textContent = "Error submitting form. Try again.";
    document.getElementById('output-message').style.color = "red";
}
});

