postData('http://localhost:3000/posts', {
  title: 'The Adventures of Tom',
  author: 'Mark Twain'
})
  .then(data => getData('http://localhost:3000/posts'))
  .then(data => deleteData('http://localhost:3000/posts/30'))
  .catch(error => console.error(error))

function postData(url, data) {
  // Default options are marked with *
  return fetch(url, {
    body: JSON.stringify(data), // must match 'Content-Type' header
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, same-origin, *omit
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // *client, no-referrer
  })
    .then(response => response.json()) // 輸出成 json
}

function getData(url){
  return fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });
}

function deleteData(url, data) {
  // Default options are marked with *
  return fetch(url, {
    method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
  })
    .then(response => response.json()) // 輸出成 json
}