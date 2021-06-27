//1. isArray()
let isArrayBox = document.getElementById("isArray_result");

isArrayBox.innerHTML += "<p> Array.isArray([1, 2]) : " + Array.isArray([1, 2]) + "</p>" +
                        "<p> Array.isArray(123) : " + Array.isArray(123) + "</p>" +
                        "<br>" +
                        "<p>isArray()가 필요한 이유는 typeof로는 배열 여부를 확인할 수 없기 때문이다.</p>" +
                        "<p>typeof {a:1} (오브젝트 타입) : " + (typeof {a:1}) + "</p>" +
                        "<p>typeof [1,2] (배열 타입) : " + (typeof [1,2]) + "</p>" +
                        "<p>typeof null (null) : " + (typeof null) + "</p>";

//2. indexOf()
let indexOfBox = document.getElementById("indexOf_result");

let value = [1, 2, 5, 2, 5];
indexOfBox.innerHTML += "<p> let value = [1, 2, 5, 2, 5]; 일 때</p>" +
                        "<p>1. value.indexOf(2) : " + value.indexOf(2) + "(파라미터와 같은 엘리먼트 값 중 첫 번째 엘리먼트의 인덱스를 반환한다)</p>" +
                        "<p>2. value.indexOf('5') : " + value.indexOf("5") + "(파라미터의 타입까지 체크한다)</p>" +
                        "<p>3. value.indexOf(2, 2) : " + value.indexOf(2, 2) + "(두 번째 파라미터가 있는 경우, 두 번째 파라미터를 시작 인덱스로 설정한다)</p>";

//3. lastIndexOf()
let lastIndexOfBox = document.getElementById("lastIndexOf_result");
lastIndexOfBox.innerHTML += "<p> let value = [1, 2, 5, 2, 5]; 일 때</p>" +
                            "<p> value.lastIndexOf(5) : " + value.lastIndexOf(5) + "</p>";

//4. forEach()
let forEachBox = document.getElementById("forEach_result");

let list = ["A", "B", "C"];
forEachBox.innerHTML += "<p>let list = ['A', 'B', 'C']; 일 때</p>" +
                        "<pre style='border:1px solid black; padding: 10px; display: inline-block;'>" +
                        "list.forEach(function(el, index, all) { \n" +
                        "    console.log(el + ' : ' + index + ' : ' + all); \n" +
                        "}); \n" +
                        "</pre><br>" +
                        "<pre>" +
                        "[실행 결과] \n";
                        list.forEach(function(el, index, all) { //배열의 엘리먼트 수만큼 콜백 함수를 반복 호출한다.
                            forEachBox.innerHTML += "<p>" + el + " : " + index + " : " + all + "</p>";
                        });

forEachBox.innerHTML += "</pre>";

//5. for()와 forEach()의 차이 실습
let forEachTestBox = document.getElementById("forEachTest_result");

forEachTestBox.innerHTML += "<p>함수 코드가 없는 빈 함수를 작성하고, 1~1,000,000까지 들어있는 배열을 만든다. 해당 배열을 forEach()로 반복하면서 check()함수를 호출했을 때 걸리는 실행시간을 구하기</p>" +
                            "<pre>" +
                            "  [요구사항] \n" +
                            "   함수 이름 : check() \n" +
                            "  [목적] \n" +
                            "   - 함수 호출 시간 측정 </pre>" +
                            "<br>"; 

let check = function(){};
let arr = [];
for(let i = 1; i<=1000000; i++) {
    arr.push(i);
}

let start = Date.now();
arr.forEach(check);
let end = Date.now();

forEachTestBox.innerHTML += "<p> [실행 코드] </p>" +
                            "<pre style='border:1px solid black; padding: 10px; display: inline-block;'>" +
                            "let check = function(){}; \n" +
                            "let arr = []; \n" +
                            "for(let i = 1; i<=1000000; i++) { \n" +
                            "   arr.push(i); \n" +
                            "} \n" +
                            "\n" +
                            "let start = Date.now(); \n" +
                            "arr.forEach(check); \n" +
                            "let end = Date.now();</pre>" +
                            "<p> 최종 걸린 시간 : " + (end - start) + "(ms)</p>";

//6. every()
let everyBox = document.getElementById("every_result");

everyBox.innerHTML += "<pre style='border:1px solid black; padding: 10px; display: inline-block;'>" +
                      "let value = [20, 10, 30, 40]; \n" +
                      "let fn = function(el, index, all) { \n" +
                      "     console.log('el : ' + el); \n" +
                      "     return el > 15; \n" +
                      "} \n" +
                      "\n" +
                      "let result = value.every(fn); \n" +
                      "이면</pre>";

value = [20, 10, 30, 40];
let fn = function(el, index, all) {
    everyBox.innerHTML += "<p>el : " + el + "</p>";
    return el > 15;
}

let result = value.every(fn);

everyBox.innerHTML += "<p> 결과 : " + result + "</p>";

//7. some()
let someBox = document.getElementById("some_result");

someBox.innerHTML += "<pre style='border:1px solid black; padding: 10px; display: inline-block;'>" +
                     "let value = [20, 10, 30, 40]; \n" +
                     "let fn = function(el, index, all) { \n" +
                     "     console.log('el : ' + el); \n" +
                     "     return el > 15; \n" +
                     "} \n" +
                     "\n" +
                     "let result = value.some(fn); \n" +
                     "이면</pre>";

fn = function(el, index, all) {
    someBox.innerHTML += "<p>el : " + el + "</p>";
    return el > 15;
}

result = value.some(fn);
someBox.innerHTML += "<p> 결과 : " + result + "</p>";

//8. filter()
let filterBox = document.getElementById("filter_result");

filterBox.innerHTML += "<pre style='border:1px solid black; padding: 10px; display: inline-block;'>" +
                       "let value = [10, 20, 30, 40]; \n" +
                       "let fn = function(el, index, all) { \n" +
                       "     return el > 15; \n" +
                       "} \n" +
                       "\n" +
                       "let result = value.filter(fn); \n" +
                       "이면</pre>";

value = [10, 20, 30, 40];
fn = function(el, index, all) {
    return el > 15;
}

result = value.filter(fn);
filterBox.innerHTML += "<p> 결과 : [" + result + "]</p>";

//9. map()
let mapBox = document.getElementById("map_result");

mapBox.innerHTML += "<pre style='border:1px solid black; padding: 10px; display: inline-block;'>" +
                    "let value = [10, 20, 30]; \n" +
                    "let fn = function(el, index, all) { \n" +
                    "     return el + this.add; \n" +
                    "} \n" +
                    "\n" +
                    "let point = {add:100}" +
                    "let result = value.map(fn, point); \n" +
                    "이면</pre>";

value = [10, 20, 30];
fn = function(el, index, all) {
    return el + this.add;
}

let point = {add:10};
result = value.map(fn, point);

mapBox.innerHTML += "<p> 결과 : [" + result + "]</p>";

//10. reduce()
let reduceBox = document.getElementById("reduce_result");

reduceBox.innerHTML += "<p><strong>1. 콜백 함수만 작성한 경우(파라미터를 하나만 작성한 경우)</strong></p>" + 
                       "<pre style='border:1px solid black; padding: 10px; display: inline-block;'>" +
                       "let value = [1, 3, 5, 7]; \n" +
                       "let fn = function(prev, curr, index, all) { \n" +
                       "     console.log(prev + ', ' + curr);" +
                       "     return prev + curr; \n" +
                       "} \n" +
                       "\n" +
                       "let result = value.reduce(fn); \n" +
                       "이면</pre>";

value = [1, 3, 5, 7];
fn = function(prev, curr, index, all) {
	reduceBox.innerHTML += "<p>" + prev + ", " + curr + "</p>";
	return prev + curr;
}

result = value.reduce(fn);
reduceBox.innerHTML += "<p>결과 : " + result + "</p>" +
                       "<br>" +
                       "<p><strong>2. 두 번째 파라미터를 작성한 경우</strong></p>" +
                       "<pre style='border:1px solid black; padding: 10px; display: inline-block;'>" +
                       "let value = [1, 3, 5]; \n" +
                       "let fn = function(prev, curr, index, all) { \n" +
                       "     console.log(prev + ', ' + curr);" +
                       "     return prev + curr; \n" +
                       "} \n" +
                       "\n" +
                       "let result = value.reduce(fn, 7); \n" +
                       "이면</pre>";

value = [1, 3, 5];

result = value.reduce(fn, 7);
reduceBox.innerHTML += "<p>결과 : " + result + "</p>";

//11. reduceRight()
let reduceRightBox = document.getElementById("reduceRight_result");

reduceRightBox.innerHTML += "<pre style='border:1px solid black; padding: 10px; display: inline-block;'>" +
                            "let value = [1, 3, 5, 7]; \n" +
                            "let fn = function(prev, curr, index, all) { \n" +
                            "     console.log(prev + ', ' + curr);" +
                            "     return prev + curr; \n" +
                            "} \n" +
                            "\n" +
                            "let result = value.reduceRight(fn); \n" +
                            "이면</pre>";

value = [1, 3, 5, 7];
fn = function(prev, curr, index, all) {
	reduceRightBox.innerHTML += "<p>" + prev + ", " + curr + "</p>";
	return prev + curr;
}

result = value.reduceRight(fn);
reduceRightBox.innerHTML += "<p>결과 : " + result + "</p>";