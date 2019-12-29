function reqListener () {
  console.log(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);

oReq.open("DELETE", "http://localhost:3000/posts/1");
oReq.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
oReq.send();
