const API_URL = "https://api.github.com/users/";

const form = document.getElementById("form"),
  input = document.getElementById("input"),
  results = document.getElementById("results");

const getUsers = async (username) => {
  const response = await fetch(API_URL + username);
  const user = await response.json();
  console.log(user);
  uiCreate(user);
};

getUsers();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const userData = input.value;

  if (userData) {
    getUsers(userData);

    input.value = "";
  }
});

const uiCreate = (users) => {
  const createUiCard = `

  <div class="createUiCard">
      <div class="container createUiCard__container">
      <div class="createUiCard__left">
            <img src=${users.avatar_url} class="createUiCard__left_img" alt="${users.name}" />
           <h1 class="createUiCard__left_name">
               ${users.name}
           </h1>
           <a class="createUiCard__left_link" href="${users.login}">@login</a>
           <div class="createUiCard__left_box">

           <span class="createUiCard__left_box_span">
              followers ${users.followers}
           </span>
           <span class="createUiCard__left_box_span">
               following ${users.following}
               </span>
           </div>
      </div>



      <div class="createUiCard__right">

        <div class="createUiCard__right_box">
             <p>${users.public_repos}</p>
             <p>${users.public_gists}</p>
        </div>


      </div>
      </div>

  </div>


  `;
  results.innerHTML = createUiCard;
};
