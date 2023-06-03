
function loadPost() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => displayPost(data))
}

function displayPost(data) {
  const postBox = document.getElementById('post');
  for (const post of data) {
    const div = document.createElement('div');
    div.classList.add('post')
    div.innerHTML = `
    <h3>ID: ${post.id}</h3>
    <h4>Title: ${post.title}</h4>
    <p>Details: ${post.body}</p>`
    postBox.appendChild(div)
  }
}

loadPost()




function loadPhoto() {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then(res => res.json())
    .then(data => displayPhoto(data))
}

function displayPhoto(data) {
  const photoBox = document.getElementById('photo');
  for (const photo of data) {
    const div = document.createElement('div');
    div.classList.add('photo')
    div.innerHTML = `
    <h3>ID: ${photo.id}</h3>
    <h4>Title: ${photo.title}</h4>
    <p>Photo: ${photo.url}</p>`
    photoBox.appendChild(div)
  }
}

loadPhoto()
