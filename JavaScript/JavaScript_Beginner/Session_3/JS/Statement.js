//if문
let ifBox = document.getElementById("if_result");

let a = 1, b = 1;
ifBox.innerHTML += "<h4>변수 a, b가 같으면 '같음'을, 다르면 '다름'을 출력</h4>";

if(a === b) {
    ifBox.innerHTML += "<p>a, b는 같다</p>";
}else{
    ifBox.innerHTML += "<p>a, b는 다르다</p>";
}

//debugger
let debuggerBox = document.getElementById("debugger_result");

let sports = "스포츠";
debugger;
debuggerBox.innerHTML += "<p>" + sports + "</p>";

//while
let whileBox = document.getElementById("while_result");

let k = 1;
whileBox.innerHTML += "<p>k가 3보다 작을 동안만 반복</p>";
while(k<3) {
    whileBox.innerHTML += "<p>k ==> " + k + "</p>";
    k++;
}

//do ~ while문
let doWhileBox = document.getElementById("doWhile_result");

k = 0;
do {
	doWhileBox.innerHTML += "<p>do ==> " + k + "</p>";
	k++;
} while (k<3) {
	doWhileBox.innerHTML += "<p>while ==> " + k + "</p>";
}

//for문
let forBox = document.getElementById("for_result");

forBox.innerHTML += "<p> i가 2보다 작은 동안에만 반복</p>";

for(let i = 0; i<2; i++) {
    forBox.innerHTML += "<p> i : " + i + "</p>";
}

forBox.innerHTML += "<br><h4> for문 실습 </h4>" +
                    "<p>1에서 50까지 반복하면서 홀수 번째 값과 짝수 번째 값을 누적하고 반복한 값을 누적한다. 반복을 완료하면 누적한 홀수, 짝수, 전체 값을 출력한다.</p>";

let odd = "홀수 : ", even = "짝수 : ", total = "전체 : ";

for(let i = 1; i<=50; i++) {
    if(((i % 2) == 1) && i != 49) odd += i + ", ";
    else if(((i % 2) == 0) && i != 50) even += i + ", ";
    else if(i === 49) odd += i;
    else if(i === 50) even += i;

    if(i != 50) total += i + ", ";
    else total += i;
}

forBox.innerHTML += "<p>" + odd + "</p>";
forBox.innerHTML += "<p>" + even + "</p>";
forBox.innerHTML += "<p>" + total + "</p>";


//switch문
let switchBox = document.getElementById("switch_result");
let exp = 1;
switchBox.innerHTML += "<p> exp의 값을 평가하여 구하고, 구한 값에 일치하는 case문을 수행한다.</p>" +
                        "<p> exp => 1 </p>";

switch (exp) {
    case 1:
        switchBox.innerHTML += "<p> case 1 실행 </p>";
    case 2:
        switchBox.innerHTML += "<p> case 2 실행 </p>";
        break;
    default:
        switchBox.innerHTML += "<p> default 실행</p>";
}

//try ~ catch문
let tryBox = document.getElementById("try_result");

sports = null;

tryBox.innerHTML += "<p> sports == null 일 때, sports = ball 실행";

try {
    sports = ball;
}catch(error) {
    tryBox.innerHTML += "<p> catch 실행 </p>";
}finally {
    tryBox.innerHTML += "<p> finally 실행 </p>";
}

//throw문
let throwBox = document.getElementById("throw_result");

try {
    throw "예외를 발생시킴";
    var sports2 = "스포츠";
} catch(error) {
    throwBox.innerHTML += "<p>" + error +"</p>" +
                          "<p>" + sports2 + "</p>";
}