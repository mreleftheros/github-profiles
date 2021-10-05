const searchForm = document.getElementById("searchForm");
const card = document.getElementById("card");
const baseUrl = "https://api.github.com/users/";
let reposList;



// fetches repos of name and calls createRepos function
const getRepos = async name => {
  const url = baseUrl + name + "/repos";

  const res = await fetch(url);
  const data = await res.json();

  return createRepos(data);
};

// creates card which appends in html and calls getRepos 
const createCard = data => {
  card.innerHTML = "";

  let html = `
  <div class="main__card__profile">
    <figure class="main__card__profile__figure">
      <img class="main__card__profile__figure__img" src=${data.avatar_url} alt=${data.name + "'s picture"}>
      <figcaption class="main__card__profile__figure__title">${data.name}</figcaption>
    </figure>
  </div>
  <div class="main__card__info">
    <a class="main__card__info__url" href=${data.html_url} target="_blank">${data.html_url}</a>
    <div class="main__card__info__details">
      <div class="main__card__info__details__control">
        <p class="main__card__info__details__control__text">Followers</p>
        <span class="main__card__info__details__control__value">${data.followers}</span>
      </div>
      <div class="main__card__info__details__control">
      <p class="main__card__info__details__control__text">Following</p>
        <span class="main__card__info__details__control__value">${data.following}</span>  
      </div>
      <div class="main__card__info__details__control">
      <p class="main__card__info__details__control__text">Repos</p>
        <span class="main__card__info__details__control__value">${data.public_repos}</span>
      </div>
    </div>
    <ul class="main__card__info__repos-list" id="reposList"></ul>
  </div>
  `;

  card.innerHTML = html;
  
  reposList = document.getElementById("reposList");

  return getRepos(data.login);
};

// search for user data on github api and call createCard function with returned data
const getUser = async name => {
  const res = await fetch(baseUrl + name);
  const data = await res.json();

  return createCard(data);
};

// submits search form and calls getUser with username
const submitSearchForm = e => {
  e.preventDefault();

  let username = e.currentTarget.search.value.trim();

  if (!username) return; // check

  e.currentTarget.reset();

  return getUser(username);
};

getUser("florinpop17");

searchForm.addEventListener("submit", submitSearchForm);