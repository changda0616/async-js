function reqListener () {
  console.log(this.responseText);
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

