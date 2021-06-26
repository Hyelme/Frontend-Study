//1. new Array()
let newArrayBox = document.getElementById("newArray_result");

let obj = new Array();
newArrayBox.innerHTML += "<p>let obj = new Array(); 일 때</p>" +
                         "<p>1. obj type : " + (typeof obj) + "</p>" +
                         "<p>2. obj.length : " + obj.length + "</p>" +
                         "<br>";
                  
let one = new Array(10, 20);
newArrayBox.innerHTML += "<p>let one = new Array(10, 20); 일 때</p>" +
                         "<p>one ==> [" + one + "]</p>" +
                         "<br>";

let two = new Array([30, 40]);
newArrayBox.innerHTML += "<p>let two = new Array([30, 40]); 일 때</p>" +
                         "<p>two ==> [" + two + "]</p>" +
                         "<br>";

obj = new Array(3);
newArrayBox.innerHTML += "<p>let obj = new Array(3); 일 때</p>" +
                         "<p>obj ==> [" + obj + "]</p>";

//2. length 프로퍼티
let arrayLengBox = document.getElementById("arrLeng_result");

let value = [1,2,3];
arrayLengBox.innerHTML += "<p>let value = [1,2,3]; 일 때</p>" +
                          "<p> value.length : " + value.length + "</p>" +
                          "<p> value.length = 5 : [" + value + "]</p>" +
                          "<p> value.length = 2 : [" + value + "]</p>";

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
                          "<p>2. value.length : " + value.length + " ==> value : [" + value + "]</p>";

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

testBox.innerHTML += "<p> join(), push() 를 이용해서 다음과 같은 형태를 만들기(li태그 10개)</p>" +
                     "<pre style='border:1px solid black; padding: 10px; display: inline-block;'>"+
                     "&lt;ul&gt;\n" +
                     "  &lt;li id='id1'&gt;id1&lt;/li&gt; \n" +
                     "  &lt;li id='id2'&gt;id2&lt;/li&gt; \n" +
                     "            .         \n" +
                     "            .         \n" +
                     "            .         \n" +
                     "  &lt;li id='id10'&gt;id10&lt;/li&gt; \n" +                     
                     "&lt;/ul&gt;</pre>" +
                     "<br>";

const arr = ["<ul>"];

for(let i = 1; i<11; i++) {
    arr.push("<li id=id" + i + ">id" + i + "</li>");
}

arr.push("</ul>");

result = arr.join("");
testBox.innerHTML += "<pre style='border:1px solid black; padding: 10px; display: inline-block;'>" +
                      "const arr = ['&lt;ul&gt;']; \n" +
                      "for(let i = 1; i&lt;11; i++) { \n" +
                      "  arr.push('&lt;li id=id' + i + '&gt;id' + i + '&lt;/li&gt;'); \n" +
                      "} \n" +
                      "arr.push('&lt;/ul&gt;');" +
                      "result = arr.join(''); </pre>" +
                      "<p> result :" + result + "</p>";

//12. shift()
let shiftBox = document.getElementById("shift_result");

value = [1, 2, 3];

shiftBox.innerHTML += "<p> let value = [1, 2, 3]; 일 때</p>" +
                      "<p>1. value.shift() : [" + value.shift() + "]</p>" +
                      "<p>2. value : [" + value + "]</p>";
value = [].shift();
shiftBox.innerHTML += "<p>3. value 가 빈 배열일 경우, value.shift() : " + value + " (shift할게 없어서 undefined 출력)</p>";

//13. pop()
let popBox = document.getElementById("pop_result");

value = [1, 2, 3];

popBox.innerHTML += "<p> let value = [1, 2, 3]; 일 때</p>" + 
                    "<p>1. value.pop() : " + value.pop() + "</p>" +
                    "<p>2. value : [" + value + "]</p>";
value = [].pop();
popBox.innerHTML += "<p>3. value가 빈 배열일 경우, value.pop() : " + value + "</p>";

//14. splice()
let spliceBox = document.getElementById("splice_result");

value = [1, 2, 3, 4, 5];
spliceBox.innerHTML += "<p> let value = [1, 2, 3, 4, 5]; 일 때</p>" +
                       "<p>1. value.splice(1, 3) : [" + value.splice(1,3) + "]</p>" +
                       "<p>value : [" + value + "]</p>";

value = [1, 2, 3, 4, 5];
spliceBox.innerHTML += "<p>2. value.splice(1, 3, 'A', 'B') : [" + value.splice(1, 3, "A", "B") + "]</p>" +
                       "<p>value : [" + value + "]</p>";

value = [1, 2, 3, 4, 5];
spliceBox.innerHTML += "<p>3. value.splice() : [" + value.splice() + "]</p>" +
                       "<p>value : [" + value + "]</p>";

//15. sort()
let sortBox = document.getElementById("sort_result");

value = [4, 2, 3, 1];
sortBox.innerHTML += "<p> let value = [4, 2, 3, 1]; 일 때</p>" +
                     "<p> value.sort() : [" + value.sort() + "]</p>" +
                     "<br>";

value = ["A1", "A01", "B1", "B01"];
sortBox.innerHTML += "<p> let value = ['A1', 'A01', 'B1', 'B01']; 일 때</p>" +
                     "<p> value.sort() : [" + value.sort() + "</p>" +
                     "<br>";

value = [4, 2, 3, 1];
sortBox.innerHTML += "<p> let value = [4, 2, 3, 1]; 일 때 sort() 하면 원본 배열도 변경된다.</p>" +
                     "<p> value.sort() : [" + value.sort() + "]</p>" +
                     "<p> value : [" + value + "]</p>" +
                     "<br>";
                     
value = [, , 1, 2];
sortBox.innerHTML += "<p> let value = [, , 1, 2]; 일 때 undefined는 끝으로 이동한다.</p>" +
                     "<p> value.sort() : [" + value.sort() + "]</p>" +
                     "<br>";

//16. sort() 실습
let sortTestBox = document.getElementById("sortTest_result");

value = [101, 26, 7, 1234];

value.sort(function(one, two) {
    return -(one-two);
});

sortTestBox.innerHTML += "<p>let value = [101, 26, 7, 1234]; 일 때 배열의 엘리먼트 값을 역순으로 정렬</p>" +
                         "<pre style='border:1px solid black; padding: 10px; display: inline-block;'> value.sort(function(one, two) { \n" +
                         "          return -(one-two); //(또는 two-one도 가능) \n" +
                         "      });                         </pre>" +
                         "<p> value : [" + value + "]</p>";

//17. reverse()
let reverseBox = document.getElementById("reverse_result");

value = [1, 3, 7, 5];
reverseBox.innerHTML += "<p> let value = [1, 3, 7, 5]; 일 때</p>" +
                        "<p> value.reverse() : [" + value.reverse() + "]</p>";