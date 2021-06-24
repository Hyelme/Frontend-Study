//10. Array Object 실습
let testBox = document.getElementById("arrayObjTest_result");

const arr = ["<ul>"];

for(let i = 1; i<arr.length-1; i++) {
    arr.push("<li id=id" + i + ">id" + i + "</li>");
}

arr.push("</ul>");

let result = arr.join("");
testBox.innerHTML = result;