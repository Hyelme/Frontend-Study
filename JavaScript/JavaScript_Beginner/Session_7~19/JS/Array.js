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
                          "<p> value.length : " + value.length + "</p>" +
                          "<p> value.length = 5 : " + value + "</p>" +
                          "<p> value.length = 2 : " + value + "</p>";

//3. delete 연산자
let arrDeleteBox = document.getElementById("arrDelete_result")

value = 123;
value2 = 123;
arrDeleteBox.innerHTML += "<p> let value = 123; 이고, value2 = 123; 일 때</p>" +
                          "<p> delete value(let 변수) : " + delete value + "(delete 연산자 사용 불가능)</p>" +
                          "<p> delete value2(글로벌 변수) : " + delete value2 + "(delete 연산자 사용 가능)</p>" +
                          "<br>";
                
let book = {title: "책"};
arrDeleteBox.innerHTML += "<p> let book = {title: '책'}; 일 때</p>" +
                          "<p>1. delete book.title : " + delete book.title + "</p>" +
                          "<p>2. book.title : " + book.title + "</p>";
book = {title: "책"};
arrDeleteBox.innerHTML += "<p>3. delete book : " + delete book + "</p><br>";

sport = {item: "축구"};
arrDeleteBox.innerHTML += "<p> sport = {item: '축구'}; 일 때</p>" +
                          "<p> delete sports : " + delete sport + "</p><br>";

value = [1, 2, 3, 4];
arrDeleteBox.innerHTML += "<p>let value = [1, 2, 3, 4]; 일 때</p>" +
                          "<p>1. delete value[1] : " + delete value[1] + "</p>" +
                          "<p>2. value.length : " + value.length + " ==> value : " + value + "</p>";

//4. unshift()
let unshiftBox = document.getElementById("unshift_result");

value = [1, 2];
unshiftBox.innerHTML += "<p>let value = [1, 2]; 일 때</p>" +
                        "<p>1. value.unshift(345, 67) : " + value.unshift(345, 67) + "(value의 length값이 출력) ==> value : [" + value + "]</p>";

//5. push()
let pushBox = document.getElementById("push_result");

value = [1, 2];
pushBox.innerHTML += "<p> let value = [1, 2]; 일 때</p>" +
                     "<p>1. value.push(543, 76) : " + value.push(543, 76) + " ==> value : [" + value + "]</p>";

//6. concat()
let concatBox = document.getElementById("concat_result");

value = [1, 2];
concatBox.innerHTML += "<p> let value = [1, 2]; 일 때</p>" +
                       "<p>value.concat(3, 4) : [" + value.concat(3,4) + "]</p>";

value = [1, 2];
concatBox.innerHTML += "<p> let value = [1, 2]; 일 때</p>" +
                       "<p>value.concat([[3],[4, 7]], [[5], [6]]) : " + value.concat([[3],[4, 7]], [[5], [6]]) + "</p>";

//7. slice()
let sliceBox = document.getElementById("slice_result");

let origin = [1, 2, 3, 4, 5];
let sResult = origin.slice(1, 3);

sliceBox.innerHTML += "<p>1. let origin = [1, 2, 3, 4, 5]; 이고, let value = origin.slice(1, 3); 일 때</p>" +
                      "<p> origin : [" + origin + "], result : [" + sResult +"]</p>" +
                      "<br>" +
                      "<p>2. origin.slice(true, 3) : [" + origin.slice(true, 3) + "] (true => 1로 변환)</p>" +
                      "<p>3. origin.slice(false, 3) : [" + origin.slice(false, 3) + "] (false => 0으로 변환)</p>" +
                      "<br>" +
                      "<p>4. origin.slice(4, 3) : [" + origin.slice(4, 3) + "] (첫 번째 파라미터 값이 더 큰 경우에는 빈 배열 출력)</p>" +
                      "<p>5. origin.slice(2) : [" + origin.slice(2) + "] (첫 번째 파라미터만 작성한 경우에는 작성한 인덱스부터 끝까지 출력)</p>" +
                      "<p>6. origin.slice(-4, -2) : [" + origin.slice(-4, -2) + "] (파라미터에 음수를 작성한 경우에는 배열의 length를 더한 값으로 변환)</p>";

//8. join()
let joinBox = document.getElementById("join_result");

value = [1, 2, 3];
let result = value.join("##");

joinBox.innerHTML += "<p>1. let value = [1, 2, 3]; 이고, let result = value.join('##'); 일 때</p>" +
                     "<p>result : " + result + ", typeof result : " + typeof result + "</p>";

result = value.join();
joinBox.innerHTML += "<p>2. result = value.join(); 일 때</p>" +
                     "<p> result : " + result + " (파라미터를 작성하지 않으면 콤마로 분리)</p>";

result = value.join("");
joinBox.innerHTML += "<p>3. result = value.join(''); 일 때</p>" +
                     "<p> result : " + result + " (파라미터에 빈 문자열을 작성하면 엘리먼트 값만 연결해서 반환)</p>";

//9. toStrig()
let toStringBox = document.getElementById("toString_result");

result = ["A", "B", "C"].toString;
toStringBox.innerHTML += "<p>1. ['A', 'B', 'C'].toString() : " + ['A', 'B', 'C'].toString() + " </p>" +
                         "<p>2. [['가'], ['다']].toString() : " + [["가"], ["다"]].toString() + " </p>";

//10. toLocaleString()
let toLocaleStringBox = document.getElementById("toLocaleString_result");

value = [12.34, 56];
toLocaleStringBox.innerHTML += "<p>let value = [12.34, 56]; 일 때</p>" +
                               "<p>value.toLocaleString('zh-Hans-CN-u-nu-hanidec') : " + value.toLocaleString("zh-Hans-CN-u-nu-hanidec") + "</p>";

//11. Array Object 실습
let testBox = document.getElementById("arrayObjTest_result");

const arr = ["<ul>"];

for(let i = 1; i<11; i++) {
    arr.push("<li id=id" + i + ">id" + i + "</li>");
}

arr.push("</ul>");

result = arr.join("");
testBox.innerHTML = result;

