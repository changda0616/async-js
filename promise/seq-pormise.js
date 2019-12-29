function myAsyncFunction(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest() 
    xhr.open("GET", url) 
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(xhr.statusText) 
    xhr.send() 
  });
}

new myAsyncFunction('http://localhost:3000/posts/1')
.then(function(e){ 
  console.log(e); 
  return new myAsyncFunction('http://localhost:3000/posts/2')
})
.then(function(e){ 
  console.log(e); 
  return new myAsyncFunction('http://localhost:3000/posts/3')
});