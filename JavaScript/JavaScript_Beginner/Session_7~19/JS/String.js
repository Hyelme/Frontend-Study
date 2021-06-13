let toStringBox = document.getElementById("toString_result");

var result = toString(123);
toStringBox.innerHTML += "<p> var result = toString(123) => " + result + "</p>";
debugger;

result = toString();
toStringBox.innerHTML += "<p> var result = toString({key:123}) => " + result + "</p>";


let charAtBox = document.getElementById("charAt_result");
let value = "sports";
charAtBox.innerHTML += "<p> let value = 'sports'; 일 때</p>" + 
                       "<p>1. value.charAt(12) ==> " + value.charAt(12) + "(빈 문자열)</p>" +
                       "<p>2. value[12] ==> " + value[12] + "</p>";

let indexOfBox = document.getElementById("indexOf_result");
value = "123123";

indexOfBox.innerHTML += "<p>indexOf()에서 발생 가능한 케이스</p>";

indexOfBox.innerHTML += "<p>1. 없는 문자를 검색할 경우 ==> " + value.indexOf(-1) + "</p>" +
                        "<p>2. 두 번째 파라미터가 0보다 작을 경우 ==> " + value.indexOf(1, -2) + "</p>" +
                        "<p>3. 두 번째 파라미터가 length보다 큰 경우 ==> " + value.indexOf(2, 12) + "</p>" +
                        "<p>4. 같은 문자가 2개 이상인 경우 ==> " + value.indexOf(3) + "</p>" +
                        "<br>" +
                        "<p>lastIndexOf()에서 발생 가능한 케이스</p>" +
                        "<p>1. 없는 문자를 검색할 경우 ==> " + value.lastIndexOf(14) + "</p>" +
                        "<p>2. 두 번째 파라미터가 0보다 작을 경우 ==> " + value.lastIndexOf(3, -2) + "</p>" +
                        "<p>3. 두 번째 파라미터가 length보다 큰 경우 ==> " + value.lastIndexOf(2, 8) + "</p>";

//concat()
let concatBox = document.getElementById("concat_result");

result = "sports";
let obj = new String(123);
concatBox.innerHTML += "<p> let result = 'sports'; 일 때</p>" +
                       "<p> result.concat('축구', 11) ==> " + result.concat("축구", 11) + "</p>" +
                       "<br>" +
                       "<p> let obj = new String(123); 일 때</p>" +
                       "<p> obj.concat('ABC') ==> " + obj.concat("ABC") + "</p>";

//toLowerCase(), toUpperCase()
let toCaseBox = document.getElementById("toCase_result");

toCaseBox.innerHTML += "<p>1. 'ABCDE' ==> " + "ABCDE".toLowerCase() + "</p>" +
                       "<p>2. 'abcde' ==> " + "abcde".toUpperCase() + "</p>";