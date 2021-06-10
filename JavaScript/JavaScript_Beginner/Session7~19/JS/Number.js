//Number()
let excNumBox = document.getElementById("exchangeNumber_result");

excNumBox.innerHTML += "<p> Number('123') + 500 => " + (Number("123") + 500) + "</p>";
excNumBox.innerHTML += "<p> Number('ABC') => " + Number("ABC") + "</p>";

//new 연산자
let newNumBox = document.getElementById("newNum_result");

let obj = new Number();
newNumBox.innerHTML += "<p> let obj = new Number(); </p>"
                     + "<p> obj 타입 : " + typeof(obj) + "</p>"
                     + "<br> <p> 인스턴스 생성 목적 -> 인스턴스마다 값을 갖기 위해서 </p>"
                     + "<p> let oneObj = new Number('123');</p>";

let oneObj = new Number("123");
newNumBox.innerHTML += "<p> oneObj.valueOf() => " + (oneObj.valueOf()) + "</p>"
                     + "<p> let twoObj = new Number('456'); </p>";

let twoObj = new Number("456");
newNumBox.innerHTML += "<p> twoObj.valueOf() => " + (twoObj.valueOf()) + "</p>";

//primitive value
let primiBox = document.getElementById("primitive_result");

primiBox.innerHTML += "<p>인스턴스의 프리미티브 값</p>" + 
                    + "<p> let obj = new Number(123) 에 정수를 더해도 값이 출력된다.</p>";

obj = new Number(123);

primiBox.innerHTML += "<p> obj + 200 => " + (obj + 200) + "</p>"
                   +  "<p>위와 같이 new Number(123)로 인스턴스를 생성하여 obj에 할당한 뒤, obj에 값을 더해도 연산이 진행된다. </p>"
                   +  "<p> => obj가 인스턴스이므로 연산이 될 수 없는데 값이 더해지는 이유는 123을 [[PrimitiveValue]]로 설정하기 때문. </p>"
                   +  "<p> => 프리미티브 값을 갖는 인스턴스에 값을 더하면 인스턴스의 프리미티브 값과 연산을 진행한다.</p>";

//valueOf()
let valueOfBox = document.getElementById("valueOf_result");
valueOfBox.innerHTML += "<p> obj.valueOf() => "+ obj.valueOf() +"</p>";

//toString()
let toStringBox = document.getElementById("toString_result");

let value = 20;

toStringBox.innerHTML += "<p> let value = 20 일 때, </p>" +
                         "<p>1. 20 === value.toString() => " + (20 === value.toString()) + "</p>" +
                         "<p>   (value는 20이지만 문자열로 변환시켰으므로 타입이 달라서 false 출력)</p>" +
                         "<br>" +
                         "<p>2. value.toString(16) => " + (value.toString(16)) + "</p>" +
                         "<p>   (value를 16진수로 변환하여 14 출력)</p>" + 
                         "<br>" +
                         "<p>‼주의사항‼</p>" +
                         "<p> 20.valueOf() => 에러발생</p>" +
                         "<p> 20..valueOf() 형태로 작성해야 한다. ==> " + (20..valueOf()) + "</p>";

//toLocalString()
let toLocalStringBox = document.getElementById("toLocalString_result");

value = 1234.56;

toLocalStringBox.innerHTML += "<p> let value = 1234.56일 때</p>" +
                              "<p>1. (현재 지역 기준) value.toLocalString() ==> " + value.toLocaleString() + "</p>" +
                              "<p>2. (독일식 표현) value.toLocalString('de-DE') ==> " + value.toLocaleString('de-DE') + "</p>" +
                              "<p>3. (중국 한자식 표현) value.toLocalString('zh-Hans-CN-u-nu-hanidec') ==> " + value.toLocaleString('zh-Hans-CN-u-nu-hanidec') + "</p>";

//toExponential()
let toExponBox = document.getElementById("toExpon_result");

value = 1234;

toExponBox.innerHTML += "<p>1. let value = 1234; 일 때</p>" +
                        "<p>    value.toExponential() ==> " + value.toExponential() + "</p>" +
                        "<br>";

value = 123456;
toExponBox.innerHTML += "<p>2. let value = 123456; 일 때</p>" +
                        "<p>    value.toExponential(3) ==> " + value.toExponential(3) + "</p>"

//toFixed()
let toFixedBox = document.getElementById("toFixed_result");

value = 1234.567;

toFixedBox.innerHTML += "<p>let value = 1234.567; 일 떄</p>" +
                        "<p>1. value.toFixed(2) ==> "+ value.toFixed(2) +"</p>" +
                        "<p>2. value.toFixed() ==> " + value.toFixed() + "</p>";