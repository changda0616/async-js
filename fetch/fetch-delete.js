deleteData('http://localhost:3000/posts/2')
  .then(data => console.log(data)) // JSON from `response.json()` call
  .catch(error => console.error(error))

function deleteData(url, data) {
  // Default options are marked with *
  return fetch(url, {
    method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
  })
    .then(response => response.json()) // 輸出成 json
}