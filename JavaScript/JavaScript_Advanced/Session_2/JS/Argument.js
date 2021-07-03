//엔진에서의 파라미터 처리
var EngineParamBox = document.getElementById("EngineParam_result");

var get = function(one) {
    debugger; //여기서 argument에 저장
    return arguments;
};
debugger;
get(77, 100);
debugger;

EngineParamBox.innerHTML += "<pre style='border:1px solid black; padding: 10px; display: inline-block;'>" +
                            "var get = function(one) { \n" +
                            "   return one; \n" +
                            "}; \n" +
                            "</pre>" + 
                            "<p> get(77, 100) : " + get.arguments + "</p>";