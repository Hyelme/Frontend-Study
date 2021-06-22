let GPropBox = document.getElementById("globalProp_result");

GPropBox.innerHTML += "<p>Global 프로퍼티는 오브젝트명을 쓰지 않고 독립적으로 사용한다.</p>" +
                      "<p>1. NaN ==> " + NaN + "</p>" +
                      "<p>2. Infinity ==> " + Infinity + "</p>" +
                      "<p>3. undefined ==> " + undefined + "</p>";

let parseFloatBox = document.getElementById("parseFloat_result");

parseFloatBox.innerHTML += "<p>1. parseFloat('f12.34') ==> " + parseFloat("f12.34") + "</p>" +
                           "<p>2. parseFloat(123) ==> " + parseFloat(123) + "</p>" +
                           "<p>3. parseFloat('') ==> " + parseFloat("") + "</p>";

//encodeURI()
let encURIBox = document.getElementById("encURI_result");
let encURI = encodeURI("data?a=번&b=호");
encURIBox.innerHTML += "<p> encodeURI('data?a=번&b=호') ==> " + encURI + "</p>";

//encodeURIComponent()
let encURICompBox = document.getElementById("encURIComp_result");
let encURIComp = encodeURIComponent("data?a=번&b=호");
encURICompBox.innerHTML += "<p> encodeURIComponent('data?a=번&b=호') ==> " + encodeURIComponent("data?a=번&b=호") + "</p>";

//decodeURI()
let decURIBox = document.getElementById("decURI_result");
decURIBox.innerHTML += "<p> decodeURI('data?a=%EB%B2%88&b=%ED%98%B8') ==> " + decodeURI(encURI) + "</p>";

//decodeURIComponent()
let decURICompBox = document.getElementById("decURIComp_result");
decURICompBox.innerHTML += "<p> decodeURIComponent('data%3Fa%3D%EB%B2%88%26b%3D%ED%98%B8') ==> " + decodeURIComponent(encURIComp) + "</p>";

//eval()
let evalBox = document.getElementById("eval_result");
let result = eval("parseInt('-123.45')");

evalBox.innerHTML += "<p> eval(`parseInt('-123.45')`) ==> " + result + "</p?>";