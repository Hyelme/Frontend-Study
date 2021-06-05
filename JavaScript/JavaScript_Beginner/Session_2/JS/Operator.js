// 나누기 연산자
let result = document.getElementById("divide_result");

//NaN 반환1 - 양쪽의 평가 결과가 하나라도 숫자가 아닐 때
const num1 = 3 / "A";
result.innerHTML += "<p>1. 3 / 'A'의 결과값은 : " + num1 + "</p>";

//NaN 반환2 - 분모, 분자 모두 0 일 떄
const num2 = 0 / 0;
result.innerHTML += "<p>2. 0 / 0의 결과값은 : " + num2 + "</p>";

//Infinity 반환 - 분모가 0 일 때
const num3 = 4 / 0;
result.innerHTML += "<p>3. 4 / 0의 결과값은 : " + num3 + "</p>";

//0 반환 - 분자가 0일 떄
const num4 = 0 / 12;
result.innerHTML += "<p>4. 0 / 12의 결과값은 : " + num4 + "</p>";



//단항 + 연산자
let unary = document.getElementById("unary_plus_result");

let uNum = "7"; //string type
unary.innerHTML += "<h4>단항 + 연산자 타입</h4>";
unary.innerHTML += "<p> '7' : " + typeof(uNum) + "</p>";
unary.innerHTML += "<p> +'7' : " + typeof(+uNum) + "</p>";
unary.innerHTML += "<p> Number('7') : " + typeof(Number(uNum)) + "</p>";


//단항 - 연산자
let unaryMinus = document.getElementById("unary_minus_result");

let uMinusNum = "12"; //string type
unaryMinus.innerHTML += "<p> -'12' : " + -uMinusNum + "</p>";
unaryMinus.innerHTML += "<p> 20 + -'12' : " + (20 + -uMinusNum) + "</p>";
unaryMinus.innerHTML += "<p> '12'의 변숫값의 부호는 바뀌지 않는다 : " + uMinusNum + "</p>";


//후치 ++ 연산자
let postOperator = document.getElementById("post_operator_result");

let one = 1;
postOperator.innerHTML += "<p> one 초기값 : "+ one +"</P>";

let poNum = one++ + 3;
postOperator.innerHTML += "<p> one++ + 3 : "+ poNum +" (연산이 끝난 뒤 one 값이 증가)</P>";
postOperator.innerHTML += "<p> one 변경값 : "+ one +"</P>";


//!연산자
let exclamation = document.getElementById("exclamation_result");

let value = true;
exclamation.innerHTML += "<p>value : "+value+"</p>";
exclamation.innerHTML += "<p>!value : "+!value+"</p>";
exclamation.innerHTML += "<p>!!'A' : "+(!!"A")+" ('A'를 true로 변환했을 때, !'A'는 false, !!'A'는 완전하게 true로 변환(ES3에서 자주사용, 지금은 사용X))</p>";


//동등, 부등, 일치, 불일치 연산자
let equals = document.getElementById("equals_result");

equals.innerHTML += "<p> 동등 연산자 (==) </p>";
equals.innerHTML += "<p>1. 1 == '1' => " + (1 == "1") + "</p>";

let value1;
equals.innerHTML += "<p>2. value1 == undefined(value1은 선언만 한 상태) => " + (value1 == undefined) + "</p>";
equals.innerHTML += "<p>3. value1 == null(value1은 선언만 한 상태) => " + (value1 == null) + " (‼ undefined와 null은 '값' 일뿐 타입이 다른 것이므로 true 출력 ‼)</p>";

equals.innerHTML += "<br><p> 부등 연산자 (!=) </p>";
equals.innerHTML += "<p>1. a != b => " + ('a' != 'b')  +"</p>";
equals.innerHTML += "<p>2. !(a == b) => " + (!('a' == 'b'))  +"</p>";

equals.innerHTML += "<br><p> 일치 연산자 (===) </p>";
equals.innerHTML += "<p>1. 1 === 1 => " + (1 === 1)  +"</p>";
equals.innerHTML += "<p>2. 1 === '1' => " + (1 === '1')  +"</p>";

equals.innerHTML += "<p>3. value1 == null(value1은 선언만 한 상태) => " + (value1 == null)  +"</p>";
equals.innerHTML += "<p>4. value1 === null(value1은 선언만 한 상태) => " + (value1 === null)  +"</p>";


//논리 연산자
let logic = document.getElementById("logic_result");

let value2, zero = 0, two = 2;

logic.innerHTML += "<p> || 연산자 </p>";
logic.innerHTML += "<p>1. value2(선언만) || zero(=0) || two(=2) => " + (value2 || zero || two)  +"</p>";
logic.innerHTML += "<p><h5>value2 변수값이 undefined 이므로 false</h5></p>";
logic.innerHTML += "<p><h5>zero 변수값이 0이므로 false (0을 제외한 1, 2, 3은 true, 0은 false)</h5></p>";
logic.innerHTML += "<p><h5>two 변수값이 2이므로 true가 되며 two 변수값을 반환한다.</h5></p>";
logic.innerHTML += "<p><h5>즉, true가 아닌 true가 되는 변수값을 반환한다. 2가 true이므로 전체 비교는 true이다.</h5></p>";

logic.innerHTML += "<br>";

one = 1;
logic.innerHTML += "<p>2. one === 1 || two2 === 2 => " + (one === 1 || two2 === 2) +"</p>";
logic.innerHTML += "<p><h5>왼쪽 결과가 true이므로 true 반환</h5></p>";
logic.innerHTML += "<p><h5>왼쪽 비교 결과가 true이면 오른쪽은 비교할 필요가 없다.</h5></p>";
logic.innerHTML += "<p><h5>오른쪽을 비교하면 two2라는 변수는 존재하지 않으므로 에러가 발생</h5></p>";

