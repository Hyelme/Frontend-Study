//stringify()
let stringifyBox = document.getElementById("stringify_result");

stringifyBox.innerHTML += "<p><strong>1. 첫 번째 파라미터만 사용</strong></p>" +
                          "<pre style='border:1px solid black; padding: 10px; display: inline-block;'>" +
                          "let value = { \n" +
                          "  book: '책', \n" +
                          "  title: 123 \n" +
                          "}; \n" +
                          "\n" +
                          "let result = JSON.stringify(value); \n" +
                          "</pre>";

let value = {
    book : '책',
    title: 123
}

let result = JSON.stringify(value);

stringifyBox.innerHTML += "<p> result : " + result + "</p>" +
                          "<br>" +
                          "<p><strong>2. 배열 변환</strong></p>" +
                          "<pre style='border:1px solid black; padding: 10px; display: inline-block;'>" +
                          "let value = ['book', '책', 123]; \n" +
                          "let result = JSON.stringify(value); \n" +
                          "</pre>";

value = ['book', '책', 123];
result = JSON.stringify(value);

stringifyBox.innerHTML += "<p> result : " + result + "</p>" +
                          "<br>" +
                          "<p><strong>3. 특수한 값 변환</strong></p>" +
                          "<p> [Infinity, NaN, null] : " + JSON.stringify([Infinity, NaN, null]) + "</p>" +
                          "<p> [true, false] : " + JSON.stringify([true, false]) + "</p>" +
                          "<br>" +
                          "<p><strong>4. undefined 변환</strong> : undefined는 작성한 곳의 타입에 따라 다르게 변환한다.</p>" +
                          "<p> undefined : " + JSON.stringify(undefined) + "</p>" +
                          "<p> [undefined] : " + JSON.stringify([undefined]) + "</p>" +
                          "<p> {value : undefined} : " + JSON.stringify({value:undefined}) + "</p>" +
                          "<br>" +
                          "<p><strong>5. 두 번째 파라미터에 함수 작성</strong></p>" +
                          "<pre style='border:1px solid black; padding: 10px; display: inline-block;'>" +
                          "let data = { book: '책', point: 55 }; \n" +
                          "function replace(key, value) { \n" +
                          "  return key === 'point'? 11:value; \n" +
                          "}; \n" +
                          "\n" +
                          "let result = JSON.stringify(data, replace); \n" +
                          "</pre>";

let data = {book:'책', point:55};
function replace(key, value) {
    return key === "point"?11:value;
}
result = JSON.stringify(data, replace);

stringifyBox.innerHTML += "<p> result : " + result + "</p>" +
                          "<br>" +
                          "<p><strong>6. 두 번째 파라미터에 배열 작성</strong> : 배열에 저장된 문자열과 프로퍼티 이름이 같은 프로퍼티만 result에 저장한다.</p>" +
                          "<pre style='border:1px solid black; padding: 10px; display: inline-block;'>" +
                          "let data = { book: '책', point: 11, amount: 90 }; \n" +
                          "let result = JSON.stringify(data, ['book','amount']); \n" +
                          "</pre>";

data = {book:'책', point:11, amount:90};
result = JSON.stringify(data, ['book', 'amount']);

stringifyBox.innerHTML += "<p> result : " + result + "</p>" +
                          "<br>" +
                          "<p><strong>7. 세 번째 파라미터에 줄 분리 작성</strong> : 세 번째 파라미터에 줄 분리 구분자 작성</p>" +
                          "<pre style='border:1px solid black; padding: 10px; display: inline-block;'>" +
                          "let data = {sports:'soccer', time: 90}; \n" +
                          "let result = JSON.stringify(data, '', '&#92;n'); \n" +
                          "</pre>";

data = {sports: 'soccer', time: 90};
result = JSON.stringify(data, "", '\n');

stringifyBox.innerHTML += "<pre> result : " + result + "</pre>" +
                          "<br>" +
                          "<p><strong>8. 들여쓰기 숫자 작성</strong> : 세 번째 파라미터에 숫자를 입력하면 숫자만큼 들여쓰기가 작성된다.</p>" +
                          "<pre style='border:1px solid black; padding: 10px; display: inline-block;'>" +
                          "let data = {sports:'soccer', time: 90}; \n" +
                          "let result = JSON.stringify(data, '', 4); \n" +
                          "</pre>";

data = {sports: 'soccer', time: 90};
result = JSON.stringify(data, "", 4);

stringifyBox.innerHTML += "<pre> result : " + result + "</pre>" +
                          "<br>" +
                          "<p><strong>9. 문자 앞에 삽입할 문자 작성</strong> : 세 번째 파라미터에 문자열을 입력하면 데이터 앞에 해당 문자열이 작성된다.</p>" +
                          "<pre style='border:1px solid black; padding: 10px; display: inline-block;'>" +
                          "let data = {sports:'soccer', time: 90}; \n" +
                          "let result = JSON.stringify(data, '', '##'); \n" +
                          "</pre>";

data = {sports: 'soccer', time: 90};
result = JSON.stringify(data, "", "##");

stringifyBox.innerHTML += "<pre> result : " + result + "</pre>";

//parse()
let parseBox = document.getElementById("parse_result");

parseBox.innerHTML += "<p><strong>1. 문자열 파싱</strong></p>" +
                      "<pre style='border:1px solid black; padding: 10px; display: inline-block;'>" +
                      "let value = &#34;123&#34;; \n" +
                      "try { \n" +
                      "	var result = JSON.parse(value); \n" +
                      "} catch(e) { \n" +
                      "	console.log('JSON 파싱 에러'); \n" +
                      "}; \n" +
                      "</pre>";

value = "123";
result = "";
try {
    result = JSON.parse(value);
} catch(e) {
    parseBox.innerHTML += "<p> JSON 파싱 에러</p>";
}

parseBox.innerHTML += "<p> result : " + result + "</p>" +
                      "<p> typeof result : " + (typeof result) + "</p>" +
                      "<br>" +
                      "<p><strong>2. boolean 타입 파싱</strong></p>" +
                      "<pre style='border:1px solid black; padding: 10px; display: inline-block;'>" +
                      "let value = &#34;true&#34;; \n" +
                      "try { \n" +
                      "	var result = JSON.parse(value); \n" +
                      "} catch(e) { \n" +
                      "	console.log('JSON 파싱 에러'); \n" +
                      "}; \n" +
                      "</pre>";

value = "true";
result = "";
try {
    result = JSON.parse(value);
} catch(e) {
    parseBox.innerHTML += "<p> JSON 파싱 에러</p>";
}

parseBox.innerHTML += "<p> result : " + result + "</p>" +
                      "<p> typeof result : " + typeof result + "</p>" +
                      "<br>" +
                      "<p><strong>3. 배열 파싱</strong></p>" +
                      "<pre style='border:1px solid black; padding: 10px; display: inline-block;'>" +
                      "let value = '[&#34;ABC&#34;, &#34;가나&#34;, &#34;12&#34;]'; \n" +
                      "try { \n" +
                      "	var result = JSON.parse(value); \n" +
                      "} catch(e) { \n" +
                      "	console.log('JSON 파싱 에러'); \n" +
                      "}; \n" +
                      "</pre>";

value = '["ABC", "가나", "12"]';
result = "";
try {
    result = JSON.parse(value);
} catch(e) {
    parseBox.innerHTML += "<p> JSON 파싱 에러</p>";
}

parseBox.innerHTML += "<p> result : " + result + "</p>" +
                      "<br>" +
                      "<p><strong>4. Object 파싱</strong></p>" +
                      "<pre style='border:1px solid black; padding: 10px; display: inline-block;'>" +
                      "let value = '{&#34;point&#34;: &#34;123&#34;}'; \n" +
                      "try { \n" +
                      "	var result = JSON.parse(value); \n" +
                      "} catch(e) { \n" +
                      "	console.log('JSON 파싱 에러'); \n" +
                      "};" +
                      "</pre>";

value = '{"point":"123"}';
result = "";
try {
    result = JSON.parse(value);
} catch(e) {
    parseBox.innerHTML += "<p> JSON 파싱 에러</p>";
}
console.log(result);
parseBox.innerHTML += "<p> result : " + result + "</p>" +
                      "<br>" +
                      "<p><strong>5. 두 번째 파라미터 작성</strong></p>" +
                      "<pre style='border:1px solid black; padding: 10px; display: inline-block;'>" +
                      "let data = '{&#34;book&#34;:&#34;책&#34;,&#34;movie&#34;:&#34;영화&#34;}'; \n" +
                      "let check = function(key, value) { \n" +
                      "     return key === &#34;book&#34; ? &#34;JS책&#34; : value; \n" +
                      "}; \n" +
                      "let result = JSON.parse(data, check);" +
                      "</pre>";

data = '{"book":"책","movie":"영화"}';
let check = function(key, value) {
	return key === "book" ? "JS책" : value;
};
result = JSON.parse(data, check);
console.log(result);

parseBox.innerHTML += "<p> result : " + result + "</p>";