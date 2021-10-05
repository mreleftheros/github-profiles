const searchForm = document.getElementById("searchForm");

// search for user data on github api and call createCard function with returned data
const getUser = async name => {
  const baseUrl = "https://api.github.com/users/";
  const res = await fetch(baseUrl + name);
  const data = await res.json();

  return createCard(data);
}

// submits search form and calls getUser with username
const submitSearchForm = e => {
  e.preventDefault();

  let username = e.currentTarget.search.value.trim();

  if (!username) return; // check

  e.currentTarget.reset();

  return getUser(username);
};

searchForm.addEventListener("submit", submitSearchForm);