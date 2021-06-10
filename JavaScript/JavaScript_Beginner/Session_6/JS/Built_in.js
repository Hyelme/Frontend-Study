let builtBox = document.getElementById("builtIn_result");

window.onload = function() {
	"use strict"
	debugger;

	var obj = Number; //Number 오브젝트의 구조와 형태를 보기위해 할당
	/*
	1. 빌트인 Number 오브젝트를 obj에 할당한다.
	- 따라서 obj는 빌트인 Number 오브젝트가 된다.

	2. 관리자도구-Sources-Local의 obj를 펼친다.
	*/

	debugger;
	/*
	3. MAX_VALUE, MIN_VALUE, NaN, Length 등이 있다.
		1) MIN_VALUE : 5e-324에서 MIN_VALUE가 프로퍼티 이름이고 5e-324가 프로퍼티 값이다.
		2) length : 1에서 length가 프로퍼티 이름이고 1이 프로퍼티 값이다.
		3) isNaN()가 있으며 ()는 함수를 의미한다.
			 isNan이 함수 이름이고, 프로퍼티 값은 function(){}이다.
		
		=> JavaScript의 모든 구조는 Name Value : Key Value 인 프로퍼티 형태를 띈다.
	*/

	debugger;
	//---------------------------------------------
	/*
	1. 빌트인 Number 오브젝트는
	- Number 처리를 위한 프로퍼티의 집합이다.
	- 즉, Number 처리를 위한 오브젝트이다.

	2. JS에서 Number 처리를 위한 프로퍼티를 사전에 만들어 제공하므로(즉, built-in으로 제공하므로)
	- Number.length로 1을 구할 수 있으며, Number.isNaN()으로 함수를 호출할 수 있다.
	*/

    builtBox.innerHTML += "<p> Number.length : <b>" + obj.length + "</b></p>"
                        + "<p> Number.isNaN(123) : <b>" + obj.isNaN(123) + "</b></p>";
}