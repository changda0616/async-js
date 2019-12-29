function reqListener (e) {
  console.log(e.target.responseText);
  var oReq2 = new XMLHttpRequest();
  oReq2.addEventListener("load", function(event) {
    console.log(event.target.responseText);
    var oReq3 = new XMLHttpRequest();
    oReq3.addEventListener("load", function(event) {
        console.log(event.target.responseText);
    });  
    oReq3.open("DELETE", "http://localhost:3000/posts/1");  
    oReq3.send();
  });  
  oReq2.open("GET", "http://localhost:3000/posts");  
  oReq2.send();
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);

// 準備資料
var data = {};
data.title = 'The Adventures of Tom'
data.author = 'Mark Twain'

oReq.open("POST", "http://localhost:3000/posts");
oReq.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
oReq.send(JSON.stringify(data));