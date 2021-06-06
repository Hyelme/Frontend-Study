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

