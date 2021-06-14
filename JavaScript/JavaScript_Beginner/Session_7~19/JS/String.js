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

//substring()
let substringBox = document.getElementById("substring_result");
value = "01234567";

substringBox.innerHTML += "<p> let value = '01234567'; 일 때</p>" +
                          "value.substring(2, 5) ==> " + value.substring(2,5) + "</p>";

//substr()
let substrBox = document.getElementById("substr_result");
substrBox.innerHTML += "<p> let value = '01234567'; 일 때</p>" +
                       "<p>value.substr(0, 3) ==> " + value.substr(0, 3) + "</p>";

//slice()
let sliceBox = document.getElementById("slice_result");
sliceBox.innerHTML += "<p> let value = '01234567'; 일 때</p>" +
                      "<p>value.slice(1, 4) ==> " + value.slice(1, 4) + "</p>";

//match()
let matchBox = document.getElementById("match_result");
value = "Sports drama";

matchBox.innerHTML += "<p>let value = 'Sports'; 일 때</p>" +
                      "<p>1. 정규 표현식 이용 : value.match(/a/) ==> " + value.match(/s/) + "</p>" +
                      "<p>2. 문자열 이용      : value.match('spo') ==> " + value.match("spo") + "</p>";

//replace()
let replaceBox = document.getElementById("replace_result");
value = "abcabc";

replaceBox.innerHTML += "<p>lat value = 'abcabc'; 일 때</p>" +
                        "<p>1. 문자열 이용          : value.replace('a', '바꿈') ==> " + value.replace("a", "바꿈") + "</p>" +
                        "<p>2. 정규 표현식 이용     : value.replace(/a/, '바꿈') ==> " + value.replace(/a/, "바꿈") + "</p>" +
                        "<p>3. 정규 표현식(global)  : value.replace(/a/g, '바꿈') ==> " + value.replace(/a/g, "바꿈") + "</p>";

function change() {
    return "함수";
}

replaceBox.innerHTML += "<p>4. 사용자 지정 함수 이용 : value.replace(/a/, change) ==> " + value.replace(/a/, change()) + "</p>";

//search()
let searchBox = document.getElementById("search_result");
value = "cbacba";

searchBox.innerHTML += "<p>let value = 'cbacba'; 일 때</p>" +
                       "<p>1. 정규 표현식 이용        : value.search(/a/) ==> " + value.search(/a/) + "</p>" +
                       "<p>2. 문자열 이용, 없는 구분자 : value.search('K') ==> " + value.search("K") + "</p>";

//split()
let splitBox = document.getElementById("split_result");

splitBox.innerHTML += "<p>1. 12_34_56을 '_'로 구분    : ["+ "12_34_56".split("_") +"]</p>" +
                      "<br>";

value = "123";
splitBox.innerHTML += "<p> let value = '123'일 때</p>" +
                      "<p>2. 구분자가 빈 문자열('')    : [" + value.split("") + "]</p>" +
                      "<p>3. 구분자가 없을 때()        : [" + value.split() + "]</p>" +
                      "<br>";

value = "12_34_56_78";
splitBox.innerHTML += "<p>let value = '12_34_56_78'; 일 때</p>" + 
                      "<p>4. 두 번째 파라미터 사용-3   : [" + value.split("_", 3) + "]</p>" +
                      "<br>";

value = "123";
splitBox.innerHTML += "<p> let value = '123'일 때</p>" +
                      "<p>5. 분리자가 문자열에 없을 때 : [" + value.split("A") + "]</p>";

//charCodeAt()
let charCodeAtBox = document.getElementById("charCodeAt_result");
value = "1Aa가";
charCodeAtBox.innerHTML += "<p>let value = '1Aa가'; 일 때</p>";

for(let k = 0; k<value.length; k++) {
    charCodeAtBox.innerHTML += "<p> value.charCodeAt("+k+") ==> " + value.charCodeAt(k) + "</p>";
}

charCodeAtBox.innerHTML += "<p>2. 파라미터 수가 value length보다 큰 경우 ==> " + value.charCodeAt(12) + "</p>";

//fromCharCode()
let fromCharCodeBox = document.getElementById("fromCharCode_result");

fromCharCodeBox.innerHTML += "<p> String.fromCharCode(49, 65, 97, 44032) ==> " + String.fromCharCode(49, 65, 97, 44032) + "</p>";

//localeCompare()
let localeCompareBox = document.getElementById("localeCompare_result");

value = "나";

localeCompareBox.innerHTML += "<p> let value = '나'; 일 때</p>" +
                              "<p>1. value.localeCompare('가') ==> " + value.localeCompare("가") + "</p>" +
                              "<p>1. value.localeCompare('나') ==> " + value.localeCompare("나") + "</p>" +
                              "<p>1. value.localeCompare('다') ==> " + value.localeCompare("다") + "</p>"