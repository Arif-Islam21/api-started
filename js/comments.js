function loadComments() {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error("error happend", err));
}

const loadComments2 = () => {};
