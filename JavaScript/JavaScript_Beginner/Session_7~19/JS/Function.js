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