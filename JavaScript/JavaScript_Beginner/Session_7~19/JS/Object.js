//new Obejct()
let newObjBox = document.getElementById("newObj_result");
let newNum = new Number(123);
let newObj = new Object(123);

newObjBox.innerHTML += "<p>1. let newNum = new Number(123); 일 때</p>" +
                       "<p> typeof newNum ==> " + typeof newNum + "</p>" +
                       "<p> newNum + 100 ==> " + (newNum + 100) + "</p>" +
                       +"<br>" +
                       "<p>2. let newObj = new Object(123); 일 때</p>" +
                       "<p> typeof newObj ==> " + typeof newObj + "</p>" +
                       "<p> newObj + 100 ==> " + (newObj + 100) + "</p>"
                       "<h4> => new Object()는 파라미터의 값의 타입에 따라 Number 타입이면 Number 인스턴스를, String 타입이면 String 인스턴스를 생성한다.</h4>" +
                       "<br>";

newObj = new Object();
newObjBox.innerHTML += "<p>3. let newObj = new Object(); 일 때</p>" +
                       "<p> newObj ==> " + newObj + "</p>" +
                       "<h4> => new Object()처럼 파라미터를 작성하지 않으면 undefined를 작성한 것과 같으며, 값을 갖지 않은 Object 인스턴스를 생성한다.</h4>";

//Object()
let objBox = document.getElementById("object_result");

let obj = Object({name:"JS책"});
objBox.innerHTML += "<p>let obj = Object({name:'JS책'}); 일 때</p>" +
                    "<p> obj ==> " + obj + "(인스턴스의 프리미티브 값)</p>";

let emptyObj = Object();
objBox.innerHTML += "<p>let emptyObj = Object(); 일 때</p>" +
                    "<p>emptyObj ==> " + emptyObj + "</p>" +
                    "<h4> => 파라미터를 작성하지 않으면 new Object()와 같다.</h4>"; 

//Object 생성 방법
let addObjBox = document.getElementById("addObj_result");
obj = Object({name:"value"});

addObjBox.innerHTML += "<p>let obj = Object({name:'value'}); 일 때</p>" +
                       "<p> obj ==> " + obj + "</p>" +
                       "<p> obj instanceof Object ==> " + (obj instanceof Object) + "<p>" +
                       "<h4>instanceof는 obj가 빌트인 Object의 인스턴스인지 확인하는 연산자이다.</h4>" +
                       "<br>";

obj = {name:"value"};
addObjBox.innerHTML += "<p>let obj = {name:'value'}; 일 때</p>" +
                       "<p> obj ==> " + obj +"</p>" +
                       "<p> obj instanceof Object ==> " + (obj instanceof Object) + "</p>" +
                       "<h4>Object()와 Object 리터럴{} ahen Object 인스턴스를 생성한다. 그래서 Object()를 사용하지 않고 간단하게 리터럴 형식으로 작성해도 무관하다.</h4>";
