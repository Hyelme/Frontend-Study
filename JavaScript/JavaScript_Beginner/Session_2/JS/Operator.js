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

equals.innerHTML += "<p> 동등 연산자 </p>";
equals.innerHTML += "<p>1. 1 == '1' => " + (1 == "1") + "</p>";

let value1;
equals.innerHTML += "<p>1. value1 == undefined(value1은 선언만 한 상태) => " + (value1 == undefined) + "</p>";
equals.innerHTML += "<p>1. value1 == null(value1은 선언만 한 상태) => " + (value1 == null) + " (‼ undefined와 null은 '값' 일뿐 타입이 다른 것이므로 true 출력 ‼)</p>";
