//new Boolean()
let newBooleanBox = document.getElementById("newBoolean_result");

newBooleanBox.innerHTML += "<p><strong>1. new Boolean() 생성해서 파라미터 값을 true 또는 false로 변환하여 프리미티브에 설정한다.</strong></p>" + 
                           "<pre style='border:1px solid black; padding: 10px; display: inline-block;'>" +
                           "let value = [undefined, null, NaN, 0, '']; \n" +
                           "for(let k = 0; k < value.length; k++) { \n" +
                           "     let obj = new Boolean(value[k]); \n" +
                           "     console.log(obj + 1); \n" +
                           "} \n" +
                           "</pre>" +
                           "<p> [결과] </p>";

let value = [undefined, null, NaN, 0, ""]; //value의 모든 값이 false로 변환된다.
for(let k = 0; k < value.length; k++) {
	let obj = new Boolean(value[k]); //생성된 Boolean 인스턴스의 프리미티브 값으로 설정된다.
	newBooleanBox.innerHTML += "<p>" + (obj + 1) + "</p>"; //false를 값으로 변환하면 0이 되며 1을 더하면 1이 된다.
}

newBooleanBox.innerHTML += "<br>" +
                           "<p><strong>2. 문자열이면서 값이 있으면 true로 변환한다.</strong></p>" + 
                           "<pre style='border:1px solid black; padding: 10px; display: inline-block;'>" +
                           "let value = [12, '1', '0', 'false']; \n" +
                           "for(let k = 0; k<value.length; k++) { \n" +
                           "     let obj = new Boolean(value[k]); \n" +
                           "     console.log(obj + 1); \n" +
                           "} \n" +
                           "</pre>" +
                           "<p> [결과] </p>";

value = [12, "1", "0", "false"]; //value의 모든 값이 true로 변환된다. 여기서 "0"은 문자열 타입이기 때문에 Number 타입의 0과는 달리 true로 변환된다.
for(let k = 0; k<value.length; k++) {
	let obj = new Boolean(value[k]);
	newBooleanBox.innerHTML += "<p>" + (obj + 1) + "</p>"; //2 2 2 2
}
//Boolean()
let booleanBox = document.getElementById("boolean_result");
booleanBox.innerHTML += "<p><strong>Boolean()은 인스턴스를 생성하지 않고 true 또는 false로 변환한다.</strong></p>" + 
                        "<pre style='border:1px solid black; padding: 10px; display: inline-block;'>" +
                        "let value = [12, '1', '0', 'false']; \n" +
                        "for(let k = 0; k<value.length; k++) { \n" +
                        "     console.log(Boolean(value[k]) + 1); \n" +
                        "} \n" +
                        "</pre>" +
                        "<p> [결과] </p>";

value = [12, "1", "0", "false"]; //"1", "0" 이나 "false"는 다 string 타입이다.
for(let k = 0; k<value.length; k++) {
    booleanBox.innerHTML += "<p>" + (Boolean(value[k]) + 1) + "</p>";
}

//toString()
let toStringBox = document.getElementById("toString_result");
let result = true.toString();

toStringBox.innerHTML += "<p> let result = true.toString(); 일 때</p>" +
                         "<p>1. result : " + result + "</p>" +
                         "<p>2. typeof result : " + typeof result + "</p>";

//valueOf()
let valueOfBox = document.getElementById("valueOf_result");
obj = new Boolean(3);

valueOfBox.innerHTML += "<p> let result = new Boolean(3); 일 때</p>" +
                        "<p> obj.valueOf() : " + obj.valueOf() +"</p>";