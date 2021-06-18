let newFuncBox = document.getElementById("newFunction_result");

let obj = new Function("book", "return book;");
newFuncBox.innerHTML += "<p>let obj = new Function('book', 'return book'); 일 때</p>" +
                        "<p> obj('JS책') ==> " + obj("JS책") + "</p>";

//파라미터 수에 따른 인스턴스 생성 기준의 차이점
obj = new Function("one", "two", "return one + two;");
newFuncBox.innerHTML += "<br>" +
                        "<h4>파라미터 수에 따른 인스턴스 생성 기준의 차이점</h4>" +
                        "<p>1. 파라미터 2개 이상 : let obj = new Function('one', 'two', 'return one + two;'); 일 때" +
                        "<p> obj(100, 200) ==> " + obj(100, 200) + "</p>";

obj = new Function("return 1 + 2;");
newFuncBox.innerHTML += "<p>2. 파라미터 1개 : let obj = new Function('return 1+2;);일 때" +
                        "<p> obj() ==> " + obj() + "</p>";

//call()
let callBox = document.getElementById("call_result");

function getTotal(one, two) {
    return one + two;
}

let result = getTotal.call(this, 10, 20);

callBox.innerHTML += "<p>두 파라미터의 합을 리턴하는 getTotal() 함수가 있을 때, let result = getTotal.call(this, 10, 20); 인 경우</p>" +
                     "<p> result ==> " + result + "</p>";

//apply()
let applyBox = document.getElementById("apply_result");
result = getTotal.apply(this, [10, 20]);

applyBox.innerHTML += "<p>let result = getTotal.apply(this, [10, 20]); 일 때 -> 파라미터 수가 유동적일 때 사용</p>" +
                      "<p>result ==> " + result + "</p>"

//toString()
let toStringBox = document.getElementById("toString_result");

let getBook = function() {
    return 100 + 23;
}

result = getBook.toString();
toStringBox.innerHTML += "<p>100 + 23을 리턴하는 함수 getBook()과, let result = getBook.toString(); 일 때</p>" +
                         "<p> result ==> " + result + "</p>" +
                         "<p> function 오브젝트에서의 toString()은 함수 코드를 반환한다</p>";

//argument 오브젝트
let argBox = document.getElementById("argument_result");

function getTotal2(one) {
    return one + arguments[1] + arguments[2];
}

result = getTotal2(10, 20, 30);

argBox.innerHTML += "<p>파라미터 one과 arguments[1], [2]의 합을 리턴하는 getTotal2()함수가 있을 때</p>" +
                    "<p>1. let result = getTotal(10, 20, 30); 인 경우</p>" +
                    "<p>result ==> "+ result +"</p>" +
                    "<br>";

result = getTotal2(10, 20);
argBox.innerHTML += "<p>2. let result = getTotal(10, 20); 인 경우 -> 파라미터 수가 부족한 경우" +
                    "<p>result ==> " + result + "</p>";

//apply()와 argument 오브젝트
let applyArgBox = document.getElementById("applyArg_result");

result = getTotal2.apply(this, [10, 20, 30]);

applyArgBox.innerHTML += "<p>let result = getTotal2.apply(this, [10, 20, 30]); 일 때</p>" +
                         "<p> result ==> " + result + "</p>";