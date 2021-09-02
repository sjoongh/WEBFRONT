const test = document.getElementById("submit");

function testfun() {
  console.log(document.getElementById("number").value);
}

test.addEventListener("click", testfun);