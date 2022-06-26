const API_URL = "https://api.github.com/users/";
// `https://api.github.com/users/${userData}/subscriptions`;

const form = document.getElementById("form"),
  input = document.getElementById("input"),
  results = document.getElementById("results");

const getUsers = async (username) => {
  const response = await fetch(API_URL + username);
  const user = await response.json();
  console.log(user);
  uiCreate(user);
};

(function () {
  getUsers("alimardon28");
})();

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
             <a href="#" class="createUiCard__left_link">${users.login}</a>
            <p  class="createUiCard__left_bio">${users.bio}</p>
            <button class="createUiCard__left_button ">Edit Profile</button>
             <div class="createUiCard__left_box">
                      <i class="bi bi-people-fill"></i>
                   <span class="createUiCard__left_box_span">
                   <span> ${users.followers}</span> followers
                  </span>
                  <span class="createUiCard__left_box_span">
                  <span> ${users.following}</span> following
                  </span>
             </div>
             <div class="createUiCard__left_div">
             <span class="createUiCard__left_div_span"> <i class="bi bi-building"></i>
             ${users.company}
              </span>
               <span class="createUiCard__left_div_span"> <i class="bi bi-geo-alt"></i>
                ${users.location}
               </span>
             </div>
      </div>



      <div class="createUiCard__right">

        <div class="createUiCard__right_box">
             <p class="createUiCard__right_elements"><i class="bi bi-book"></i> Owerview</p>
             <p class="createUiCard__right_elements"><i class="bi bi-journal-bookmark-fill"></i> Repositories <span>${users.public_repos}</span></p>
             <p class="createUiCard__right_elements"><i class="bi bi-window-sidebar"></i> Projects</p>
             <p class="createUiCard__right_elements"><i class="bi bi-box"></i> Packeges</p>
             <p class="createUiCard__right_elements"><i class="bi bi-star"></i> Stars  </p>
        </div>


      </div>
      </div>

  </div>


  `;
  results.innerHTML = createUiCard;
};
