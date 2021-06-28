//JS 객체 형태
let ObjShapeBox = document.getElementById("objectShape_result");

ObjShapeBox.innerHTML += "<p>1. Object 오브젝트 형태</p>" +
                         "<pre style='border:1px solid black; padding: 10px; display: inline-block;>" +
                         "var book = { \n" +
                         "  read: function(param) {code} \n" +
                         "} \n" +
                         "Object 오브젝트 형태의 특징은 인스턴스를 생성할 수 없다는 것이다." +
                         "</pre>" +
                         "<br>" +
                         "<p>2. Function 오브젝트 형태</p>" +
                         "<pre style='border:1px solid black; padding: 10px; display: inline-block;>" +
                         "function readBook(param) {code}; \n" +
                         "Function 오브젝트 형태의 특징은 객체이지만 OOP의 객체라고 하기에는 부족하며, 객체에 메소드가 하나 있는 형태를 띈다는 것이다." +
                         "</pre>";

//prototype
let protoBtn1 = document.getElementById("prototype_button");

protoBtn1.onclick = function() {
    "use strict"

	debugger;

	var obj = String;
	/*
	1. obj에 String 오브젝트가 할당된다.
	2. 개발자도구-Sources-Local의 obj를 펼치면 prototype을 볼 수 있다.
	*/

	var proto = obj.prototype;
	/*
	3. prototype을 펼친다.
	4. prototype에 많은 프로퍼티가 연결되어 있으며, 이것이 객체지향의 메소드이다.
	*/
};

let protoBtn2 = document.getElementById("prototype_button2");

protoBtn2.onclick = function() {
    "use strict"
	
	debugger;

	var Book = function(){};
	/*
	1. 개발자도구 - Sources - Local의 Book을 펼친다.
	2. 이것이 Function 오브젝트의 모습
	3. JS 엔진이 function을 만나면 오브젝트를 생성한다.
		- name에 "Book"이 작성되어 있으며, Function 오브젝트의 이름이다.
	*/
	
	var proto = Book.prototype;
	/*
	4. prototype을 펼친다.
	5. Book에 연결된 것은 엔진에서 설정한 것이다.
	*/
	
	Book.prototype.getBook = function() {
		return "JS북";
	}
	/*
	6. Book.prototype에 getBook 메소드를 연결한다.
	7. Book.prototype을 펼친다.
	8. Book.prototype에 getBook이 연결되어 있는 것을 확인할 수 있다.
	*/

	var getBook = Book.prototype.getBook;
	/*
	9. Book.prototype.getBook을 펼친다.
	10. prototype이 있는 것을 확인한다.
	11. 메소드와 함수에 자동으로 prototype이 설정된다.
	*/
}

//인스턴스
let instanceBox = document.getElementById("instance_result");

instanceBox.innerHTML += "<pre style='border:1px solid black; padding: 10px; display: inline-block;'>" +
                         "let Book = function(point) { //생성자 함수 \n" +
                         "  this.point = point; //여기서 this는 생성하는 인스턴스를 가리킨다. \n" +
                         "} \n" +
                         "Book.prototype.getPoint = function() { \n" +
                         "  return this.point + 100; \n" +
                         "} \n" +
                         "let oneInstance = new Book(200); \n" +
                         "</pre>";

let Book = function(point) { //생성자 함수
	this.point = point; //여기서 this는 생성하는 인스턴스를 가리킨다.
}
Book.prototype.getPoint = function() {
	return this.point + 100;
}
let oneInstance = new Book(200);

instanceBox.innerHTML += "<p> oneInstance.getPoint() : " + oneInstance.getPoint() +"</p>";

//instanceof
let instanceofBox = document.getElementById("instanceof_result");

instanceofBox.innerHTML += "<pre style='border:1px solid black; padding: 10px; display: inline-block;'>" +
                           "let Book = function(point) { \n" +
                           "    this.point = point; \n" +
                           "} \n" +
                           "Book.prototype.getPoint = function() { \n" +
                           "    return this.point + 100; \n" +
                           "} \n" +
                           "let oneInstance = new Book(200);" +
                           "</pre>" +
                           "<p> oneInstance instanceof Book : " + (oneInstance instanceof Book) + "</p>";

//메소드 호출 형태
let methodCallBox = document.getElementById("methodCall_result");

methodCallBox.innerHTML += "<p><strong>1. OOP의 일반적인 메소트 호출 방법</strong></p>" +
                           "<pre style='border:1px solid black; padding: 10px; display: inline-block;'>" +
                           "let data = ['book', '책', 123]; \n" +
                           "let obj = new Array(); \n" +
                           "let result = obj.concat(data); \n" +
                           "</pre>";
let data = ["book", "책", 123];
obj = new Array();
let result = obj.concat(data);

methodCallBox.innerHTML += "<p> result : " + result + "</p>" +
                           "<br>" +
                           "<p>2. JS - 데이터로 메소드 호출</p>" +
                           "<pre style='border:1px solid black; padding: 10px; display: inline-block;'>" +
                           "let data = ['book', '책', 123]; \n" +
                           "let result = data.concat();" +
                           "</pre>";

result = data.concat();

methodCallBox.innerHTML += "<p> result : " + result + "</p>" +
                           "<br>" +
                           "<p>3. JS - 오브젝트의 함수 호출</p>" +
                           "<pre style='border:1px solid black; padding: 10px; display: inline-block;'>" +
                           "let data = ['book', '책', 123]; \n" +
                           "let bookObj = { \n" +
                           "    concat: function(data) { \n" +
                           "        return data.concat(); \n" +
                           "    } \n" +
                           "};" +
                           "</pre>";

let bookObj = {
    concat: function(data) {
        return data.concat();
    }
};

methodCallBox.innerHTML += "<p> bookObj.concat(data) : " + bookObj.concat(data) + "</p>" +
                           "<br>" +
                           "<p>4. JS - 인스턴스의 메소드 호출</p>" +
                           "<pre style='border:1px solid black; padding: 10px; display: inline-block;'>" +
                           "let data = ['book', '책', 123]; \n" +
                           "let Book = function(data) { \n" +
                           "    this.data = data; \n" +
                           "}; \n" +
                           "Book.prototype.concat = function() { \n" +
                           "    return this.data.concat(); \n" +
                           "}; \n" +
                           "let oneInstance = new Book(data);" +
                           "</pre>";

Book = function(data) {
	this.data = data;
};

Book.prototype.concat = function(){
	return this.data.concat();
};

oneInstance = new Book(data);

methodCallBox.innerHTML += "<p> oneInstance.concat() : " + oneInstance.concat() + "</p>";