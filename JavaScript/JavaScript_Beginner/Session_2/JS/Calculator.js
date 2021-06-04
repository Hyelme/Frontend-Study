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

