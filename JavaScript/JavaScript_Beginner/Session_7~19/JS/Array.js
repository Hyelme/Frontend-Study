//1. new Array()
let newArrayBox = document.getElementById("newArray_result");

let obj = new Array();
newArrayBox.innerHTML += "<p>let obj = new Array(); 일 때</p>" +
                         "<p>1. obj type : " + (typeof obj) + "</p>" +
                         "<p>2. obj.length : " + obj.length + "</p>" +
                         "<br>";
                  
let one = new Array(10, 20);
newArrayBox.innerHTML += "<p>let one = new Array(10, 20); 일 때</p>" +
                         "<p>one ==> " + one + "</p>" +
                         "<br>";

let two = new Array([30, 40]);
newArrayBox.innerHTML += "<p>let two = new Array([30, 40]); 일 때</p>" +
                         "<p>two ==> " + two + "</p>" +
                         "<br>";

obj = new Array(3);
newArrayBox.innerHTML += "<p>let obj = new Array(3); 일 때</p>" +
                         "<p>obj ==> " + obj + "</p>";

//2. length 프로퍼티
let arrayLengBox = document.getElementById("arrLeng_result");

let value = [1,2,3];
arrayLengBox.innerHTML += "<p>let value = [1,2,3]; 일 때</p>" +
                          "<p> value.length ==> " + value.length + "</p>" +
                          "<p> value.length = 5 ==> " + value + "</p>" +
                          "<p> value.length = 2 ==> " + value + "</p>";

//3. delete 연산자
let arrDeleteBox = document.getElementById("arrDelete_result")

let value = 123;
value2 = 123;
arrDeleteBox.innerHTML += "<p> let value = 123; 이고, value2 = 123; 일 때</p>" +
                          "<p> delete value ==> " + delete value + "</p>" +
                          "<p> delete value2 ==> " + delete value2 + "</p>";

//4. unshift()

//5. push()

//6. concat()

//7. slice()

//8. join()

//9. toStrig()

//10. toLocaleString()

//11. Array Object 실습
let testBox = document.getElementById("arrayObjTest_result");

const arr = ["<ul>"];

for(let i = 1; i<arr.length-1; i++) {
    arr.push("<li id=id" + i + ">id" + i + "</li>");
}

arr.push("</ul>");

let result = arr.join("");
testBox.innerHTML = result;