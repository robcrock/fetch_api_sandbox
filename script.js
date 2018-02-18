document.querySelector("#button-1").addEventListener("click", getText);
document.querySelector("#button-2").addEventListener("click", getJSON);
document.querySelector("#button-3").addEventListener("click", getExternal);

function getText() {
  fetch("test.txt")
    .then(handleErrors)
    .then(function(res) {
      return res.text();
    })
    .then(function(data) {
      document.querySelector(".output").innerHTML = data;
    })
    .catch(function (error) {
      console.log(error);
    })
}

function getJSON() {
  fetch("post.json")
    .then(handleErrors)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      let output = "";
      data.forEach(function(post) {
        output += `<li>${post.title}</li>`
      })
      document.querySelector(".output").innerHTML = output;
    })
    .catch(function (error) {
      console.log(error);
    });
}

function getExternal() {
  fetch("https://api.github.com/users")
    .then(handleErrors)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      let output = "";
      data.forEach(function (user) {
        output += `<li>${user.login}</li>`
      })
      document.querySelector(".output").innerHTML = output;
    })
    .catch(function(error) {
      console.log(error);
    });
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}