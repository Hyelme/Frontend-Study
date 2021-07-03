//엔진 처리 순서
var EngineProcOrderBtn = document.getElementById("EngineProcOrder_Button");

EngineProcOrderBtn.onclick = function() {    
    debugger;
    book();
};

function book() {
	debugger;
	var title = "JS책"; //2. 변수 초기화  //3. 코드 실행 (값 할당)
	function getBook() { //1. 함수 선언문 해석
		return title;
	};
	var readBook = function(){}; //2. 변수 초기화  //3. 코드 실행 (값 할당)
	getBook();//3. 코드 실행
};

//엔진 처리 상태
var EngineProcStatusBtn = document.getElementById("EngineProcStatus_Button");
var EngineProcStatusBox = document.getElementById("EngineProcStatus_result");

EngineProcStatusBtn.onclick = function() {
    book2();
};

function book2() {
    EngineProcStatusBox.innerHTML += "<p> title : " + title + "</p>" +
                                     "<p> readBook : " + readBook + "</p>" +
                                     "<p> getBook() : " + getBook + "</p>";

    debugger;

    var title = "JS책";
    function getBook() {
        return title;
    };

    var readBook = function(){};
    getBook();
}

//호이스팅 실습 1
var hoistingTestBox = document.getElementById("hoisting_result");
var hoistingTestBtn1 = document.getElementById("hoistingTest1");

function test() {
    function getTest() {
        return "테스트1";
    };

    //여기서 함수 호출
    hoistingTestBox.innerHTML += "<p>1. 함수 선언문, 함수 호출, 함수 선언문 순서로 작성된 경우 : <strong>" + getTest() + "</strong></p>";
    function getTest() {
        return "테스트2";
    };
};

hoistingTestBtn1.onclick = function() {
    test();
    hoistingTestBox.innerHTML += "<p> 같은 이름의 함수 선언문이 두 번 작성되었을 때는 선언문을 차례대로 해석하기 때문에 가장 최근에 작성된 함수의 값이 리턴된다.</p>";
};

//호이스팅 실습2
var hoistingTestBtn2 = document.getElementById("hoistingTest2");

function test2() {
    var getTest = function() {
        return "테스트1";
    };

    hoistingTestBox.innerHTML += "<p>2. 함수 표현식, 함수 호출, 함수 표현식 순서로 작성된 경우 : <strong>" + getTest()+ "</strong></p>";

    var getTest = function() {
        return "테스트2";
    };
};

hoistingTestBtn2.onclick = function() {
    test2();
    hoistingTestBox.innerHTML += "<p>함수 표현식을 초기화 할 때에는 값이 이미 할당된 표현식은 초기화 시키지 않고 넘어가기 때문에 같은 이름을 가진 두 표현식이 존재할 경우에는 처음 표현식의 값이 리턴된다.</p>";
};

//호이스팅 실습3
var hoistingTestBtn3 = document.getElementById("hoistingTest3");

function test3() {
    function getTest() {
        return "테스트1";
    };

    hoistingTestBox.innerHTML += "<p>3. 함수 선언문, 함수 호출, 함수 표현식 순서로 작성된 경우 : <strong>" + getTest() + "</strong></p>";

    var getTest = function() {
        return "테스트2";
    };
};

hoistingTestBtn3.onclick = function () {
    test3();
    hoistingTestBox.innerHTML += "<p>함수 선언문이 먼저 해석되어 getTest에 function 오브젝트가 할당되므로, 함수 표현식 초기화 시에는 초기화되지 않고 그냥 넘어가게 되므로 함수 선언문의 값이 리턴된다.</p>";
}

//호이스팅 실습4
var hoistingTestBtn4 = document.getElementById("hoistingTest4");

function test4() {
    var getTest = function() {
        return "테스트1";
    };

    hoistingTestBox.innerHTML += "<p>4. 함수 표현식, 함수 호출, 함수 선언문 순서로 작성된 경우 : <strong>" + getTest() + "</strong></p>";

    function getTest() {
        return "테스트2";
    };
};

hoistingTestBtn4.onclick = function() {
    test4();
    hoistingTestBox.innerHTML += "<p>함수 표현식을 먼저 작성했더라도 함수 선언문을 먼저 해석하기 때문에 함수 선언문의 값이 리턴된다.</p>";
}