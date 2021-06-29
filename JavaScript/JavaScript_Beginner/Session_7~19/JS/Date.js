//시각 표시 기준
let dateStandardBox = document.getElementById("timeStandard_result");

let obj = new Date(1970, 1, 1, 1, 1, 1, 1);
dateStandardBox.innerHTML += "<p> let obj = new Date(1970, 1, 1, 1, 1, 1, 1); 일 때</p>" +
                             "<p> obj.toLocaleString() : " + obj.toLocaleString() + "</p>";

//new Date()
let newDateBox = document.getElementById("newDate_result");

obj = new Date(2019, 02);
newDateBox.innerHTML += "<p>1. 기본 Date 인스턴스 사용</p>" +
                        "<p>let obj = new Date(2019, 02); 일 때, obj : " + obj + "</p>" +
                        "<br>" +
                        "<p>2. 파라미터를 작성하지 않았을 경우 : UTC 기준으로 현재 시간 표기</p>" +
                        "<p> new Date() : " + new Date() + "</p>" +
                        "<br>" + 
                        "<p>3. 파라미터를 문자열로 작성할 경우</p>" +
                        "<p> new Date(&#34;2019-02&#34;) : " + new Date("2019-02") + "</p>" +
                        "<br>" +
                        "<p>4. 시간 자동 넘김 : 시간 범위를 넘기면 상위 시간값에 자동으로 반영한다.</p>" +
                        "<p> new Date(2019, 11, 34) : " + new Date(2019, 11, 34) + "</p>";

//Date.now()
let dateNowBox = document.getElementById("dateNow_result");

dateNowBox.innerHTML += "<p> 현재 시간 반환 : new Date()와 Date.now()는 둘 다 현재 시간을 반환하지만, 반환 형태가 다르다</p>" +
                        "<p>1. new Date() : " + new Date() + "</p>" +
                        "<p>2. Date.now() : " + Date.now() + "</p>";

//Date.parse()
let dateParseBox = document.getElementById("dateParse_result");
dateParseBox.innerHTML += "<p> 문자열 값을 밀리초로 변환한다.(기준 : 1970.01.01)</p>" +
                          "<p> Date.parse(&#34;2019-01-23T03:11:23.123&#34;) : " + Date.parse("2019-01-23T03:11:23.123") + "</p>";

//Date 오브젝트 함수 분류
let dateFunctionBox = document.getElementById("dateFunction_result");

obj = new Date(2019, 02, 15);
dateFunctionBox.innerHTML += "<p> let obj = new Date(2019, 02, 15); 일 때</p>" +
                             "<p>1. obj.getMonth() : " + obj.getMonth() + "</p>" +
                             "<p>2. obj.getDate() : " + obj.getDate() + "</p>" +
                             "<br>";

obj = new Date();
dateFunctionBox.innerHTML += "<p> let obj = new Date(); 일 때</p>" +
                             "<p>1. obj.valueOf() : " + obj.valueOf() + "</p>" +
                             "<p>2. obj.setMonth(01) : " + obj.setMonth(01) + "</p>" +
                             "<p>3. obj.setDate(15) : " + obj.setDate(15) + "</p>";