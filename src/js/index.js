const searchForm = document.getElementById("searchForm");



// submits search form and calls getUser with username
const submitSearchForm = e => {
  e.preventDefault();

  let username = e.currentTarget.search.value.trim();

  if (!username) return; // check

  e.currentTarget.reset();

  return getUser(username);
};

searchForm.addEventListener("submit", submitSearchForm);