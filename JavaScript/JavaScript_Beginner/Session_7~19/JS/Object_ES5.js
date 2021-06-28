//defineProperty()
let definePropBox = document.getElementById("defineProp_result");

definePropBox.innerHTML += "<p>대상 오브젝트에 프로퍼티를 추가하거나 속성을 변경한다.</p>"
                           "<pre style='border:1px solid black; padding: 10px; display: inline-block;'>" +
                           "let obj = {}; \n" +
                           "Object.defineProperty(obj, 'book', { \n" +
                           "    value: 'JS북', \n" +
                           "    enumerable:true \n" +
                           "});" +
                           "</pre>";

let obj = {};
Object.defineProperty(obj, "book", {
	value: "JS북",
	enumerable: true //열거 가능 설정
});

definePropBox.innerHTML += "<p> obj : " + obj + "</p>";

//defineProperties()
let definePropertiesBox = document.getElementById("defProperties_result");

definePropertiesBox.innerHTML += "<p>다수의 프로퍼티를 추가하거나 속성을 변경한다.</p>" +
                                 "<pre style='border:1px solid black; padding: 10px; display: inline-block;'>" +
                                 "let obj = {}; \n" +
                                 "Object.defineProperties(obj, { \n" +
                                 "    soccer: { \n" +
                                 "      value: '축구', enumerable: true \n" +
                                 "    }, \n" +
                                 "    basketball: { \n" +
                                 "      value: '농구', enumerable: true \n" +
                                 "    }"
                                 "});" +
                                 "\n" +
                                 "for(let name in obj) { \n" +
                                 "  console.log(name + ':' + obj[name]) \n" +
                                 "}"
                                 "</pre>";

obj = {};
Object.defineProperties(obj, {
	soccer: {
		value: "축구", enumerable: true
	},
	basketball: {
		value: "농구", enumerable: true
	}
});

for(let name in obj) {
	definePropertiesBox.innerHTML += "<p> (name:obj[name]) : " + name + " : " + obj[name] + "</p>";
}

//value 속성
let valueBox = document.getElementById("value_result");

valueBox.innerHTML += "<pre style='border:1px solid black; padding: 10px; display: inline-block;'>" +
                      "let obj = {}; \n" +
                      "Object.defineProperty(obj, 'book', { \n" +
                      "    value: 'JS북', \n" +
                      "    enumerable: true \n" +
                      "    //get: function(){} //같이 작성이 불가능하다. \n" +
                      "}); \n" +
                      "for(var name in obj) { \n" +
                      "   console.log(name); \n"
                      "   console.log(obj[name]); \n" +
                      "}"
                      "</pre>";

obj = {};
Object.defineProperty(obj, "book", {
	value: "JS북",
	enumerable: true
	//get: function(){} //같이 작성이 불가능하다.
});

for(let name in obj) {
    valueBox.innerHTML += "<p> name : " + name + "</p>" +
                          "<p> obj[name] : " + obj[name] + "</p>";
}

//writable 속성
let writableBox = document.getElementById("writable_result");

writableBox.innerHTML += "<p>1. writable:true</p>" +
                         "<pre style='border:1px solid black; padding: 10px; display: inline-block;'>" +
                         "let obj = {}; \n" +
                         "Object.defineProperty(obj, 'book', { \n" +
                         "    value: 'JS책', \n" +
                         "    writable: true \n" +
                         "}); \n" +
                         "obj.book = '변경 가능'; \n" +
                         "</pre>";

obj = {};
Object.defineProperty(obj, "book", {
	value: "JS책",
	writable: true
});
obj.book = "변경 가능";

writableBox.innerHTML += "<p> obj.book : " + obj.book + "</p>" +
                         "<br>" +
                         "<p>2. writable:false</p>" +
                         "<pre style='border:1px solid black; padding: 10px; display: inline-block;'>" +
                         "let obj = {}; \n" +
                         "Object.defineProperty(obj, 'book', { \n" +
                         "    value: 'JS책', \n" +
                         "    writable: false \n" +
                         "}); \n" +
                         "obj.book = '변경 불가'; \n" +
                         "</pre>";

obj = {};
Object.defineProperty(obj, "book", {
	value: "JS책",
	writable: false
});
obj.book = "변경 불가";

writableBox.innerHTML += "<p> obj.book : " + obj.book + "</p>";

//enumerable 속성
let enumerableBox = document.getElementById("enumerable_result");

enumerableBox.innerHTML += "<p>1. enumerable:true</p>" +
                           "<pre style='border:1px solid black; padding: 10px; display: inline-block;'>" +
                           "let obj = {}; \n" +
                           "Object.defineProperty(obj, 'book', { \n" +
                           "    value: 'JS북', \n" +
                           "    enumerable: true \n" +
                           "}); \n" +
                           "for(let name in obj) { \n" +
                           "   console.log(name + ':' + obj[name]); \n"
                           "}"
                           "</pre>";

obj = {};
Object.defineProperty(obj, "book", {
	value: "JS북",
	enumerable: true
});

for(var name in obj) {
	enumerableBox.innerHTML += "<p> (name:obj[name]) : " + name + " : " + obj[name] + "</p>";
}

enumerableBox.innerHTML += "<br>" +
                           "<p>2. writable:false</p>" +
                           "<pre style='border:1px solid black; padding: 10px; display: inline-block;'>" +
                           "let obj = {}; \n" +
                           "Object.defineProperty(obj, 'book', { \n" +
                           "    value: 'JS북', \n" +
                           "    enumerable: false \n" +
                           "}); \n" +
                           "for(let name in obj) { \n" +
                           "   console.log(name + ':' + obj[name]); \n"
                           "}"
                           "</pre>";

obj = {};
Object.defineProperty(obj, "book", {
	value: "JS북",
	enumerable: false
});

for(var name in obj) {
	enumerableBox.innerHTML += "<p> (name:obj[name]) : " + name + " : " + obj[name] + "</p>";
}

//configurable 속성
let configurableBox = document.getElementById("configurable_result");

configurableBox.innerHTML += "<p>1. configurable:true</p>" +
                             "<pre style='border:1px solid black; padding: 10px; display: inline-block;'>" +
                             "let obj = {}; \n" +
                             "Object.defineProperty(obj, 'book', { \n" +
                             "    value: 'JS북', \n" +
                             "    configurable: true \n" +
                             "}); \n" +
                             "delete obj.book; \n" +
                             "</pre>";

obj = {};
Object.defineProperty(obj, "book", {
	value: "JS북",
	configurable: true
});

delete obj.book;

configurableBox.innerHTML += "<p> obj.book : " + obj.book + "</p>" +
                             "<br>" +
                             "<p>2. configurable:false</p>" +
                             "<pre style='border:1px solid black; padding: 10px; display: inline-block;'>" +
                             "let obj = {}; \n" +
                             "Object.defineProperty(obj, 'book', { \n" +
                             "    value: 'JS북', \n" +
                             "    configurable: false \n" +
                             "}); \n" +
                             "delete obj.book; \n" +
                             "</pre>";

obj = {};
Object.defineProperty(obj, "book", {
	value: "JS북",
	configurable: false
});

delete obj.book;

configurableBox.innerHTML += "<p> obj.book : " + obj.book + "</p>";

//get 속성
let getBox = document.getElementById("get_result");

getBox.innerHTML += "<pre style='border:1px solid black; padding: 10px; display: inline-block;'>" +
                    "let obj = {}; \n" +
                    "Object.defineProperty(obj, 'book', { \n" +
                    "    get: function() {} \n" +
                    "       return 'JS책'; \n" +
                    "    } \n" +
                    "}); \n" +
                    "\n" +
                    "let result = obj.book;" +
                    "</pre>";

obj = {};
Object.defineProperty(obj, "book", {
	get: function(){
		return "JS책";
	}
});

let result = obj.book;
getBox.innerHTML += "<p> result : " + result + "</p>";

//set 속성
let setBox = document.getElementById("set_result");

setBox.innerHTML += "<pre style='border:1px solid black; padding: 10px; display: inline-block;'>" +
                    "let obj = {}, data = {}; \n" +
                    "Object.defineProperty(obj, 'book', { \n" +
                    "    set: function(param) {} \n" +
                    "       data.title = param; \n" +
                    "    }, \n" +
                    "    get: function() {} \n" +
                    "       return data.title; \n" +
                    "    } \n" +
                    "}); \n" +
                    "\n" +
                    "obj.book = 'JS책';" +
                    "</pre>";

obj = {}; 
let data = {};
Object.defineProperty(obj, "book", {
	set: function(param) {
		data.title = param;
	},
	get: function() {
		return data.title;
	}
});
obj.book = "JS책"; 

setBox.innerHTML += "<p> obj.book : " + obj.book + "</p>";

//getPrototypeOf()
let getPrototypeOfBox = document.getElementById("getPrototypeOf_result");

getPrototypeOfBox.innerHTML += "<pre style='border:1px solid black; padding: 10px; display: inline-block;'>" +
                               "function Book(point) { \n" +
                               "	this.point = point; \n" +
                               "} \n" +
                               "\n" +
                               "Book.prototype.getPoint = function(){}; \n" +
                               "Book.prototype.setPoint = function(){}; \n" +
                               "\n" +
                               "let obj = new Book(100); \n" +
                               "let result = Object.getPrototypeOf(obj); \n" +
                               "\n" +
                               "for(var key in result) { \n" +
                               "    console.log(key + ' : ' + result[key]); \n" +
                               "};" +
                               "</pre>";

function Book(point) {
	this.point = point;
}

Book.prototype.getPoint = function(){};
Book.prototype.setPoint = function(){};

obj = new Book(100);
result = Object.getPrototypeOf(obj);


for(var key in result) {
	getPrototypeOfBox.innerHTML += "<p> (key:result[key]) : " +key + " : " + result[key] + "</p>";
};

//getOwnPropertyNames()
let getOwnPropertyNamesBox = document.getElementById("getOwnPropertyNames_result");

getOwnPropertyNamesBox.innerHTML += "<pre style='border:1px solid black; padding: 10px; display: inline-block;'>" +
                                    "let obj = {}; \n" +
                                    "Object.defineProperties(obj, { \n" +
                                    "	book: {value: '책'}, \n" +
                                    "	point: {value: 123} \n" +
                                    "}); \n" +
                                    "\n" +
                                    "let names = Object.getOwnPropertyNames(obj); \n" +
                                    "for(var k = 0; k<names.length; k++) { \n" +
                                    "   console.log(name[k]); \n" +
                                    "}" +
                                    "</pre>";

obj = {};
Object.defineProperties(obj, {
	book: {value: "책"},
	point: {value: 123}
});

//getOwnPropertyNames()는 열거 가능 여부를 체크하지 않고, 모두 받아온다.
let names = Object.getOwnPropertyNames(obj);
for(let k = 0; k<names.length; k++) {
	getOwnPropertyNamesBox.innerHTML += "<p> name["+k+"] : " +name[k] + "</p>";
}

//keys()
let keysBox = document.getElementById("keys_result");

keysBox.innerHTML +=  "<pre style='border:1px solid black; padding: 10px; display: inline-block;'>" +
                      "let obj = {}; \n" +
                      "Object.defineProperties(obj, { \n" +
                      " book: { \n" +
                      "	    value: '책', enumerable:true \n" +
                      " }, \n" +
                      " point: {value:123} \n" +
                      "}); \n" +
                      "\n" +
                      "let names = Object.keys(obj); \n" +
                      "for(var k = 0; k<names.length; k++) { \n" +
                      "   console.log(name[k]); \n" +
                      "}" +
                      "</pre>";

obj = {};
Object.defineProperties(obj, {
	book: {
		value: "책", enumerable:true
	},
	point: {value:123}
});

names = Object.keys(obj);
for(let k = 0; k < names.length; k++) {
	keysBox.innerHTML += "<p> name["+k+"] : " +name[k] + "</p>";
}

//getOwnPropertyDescriptor()
let getOwnPropertyDescriptorBox = document.getElementById("getOwnPropertyDescriptor_result");

getOwnPropertyDescriptorBox.innerHTML += "<pre style='border:1px solid black; padding: 10px; display: inline-block;'>" +
                                         "let obj = {}; \n" +
                                         "Object.defineProperty(obj, 'book', { \n" +
                                         "  value: '책', \n" +
                                         "	writable: true, enumerable: true \n" +
                                         "}); \n" +
                                         "\n" +
                                         "let desc = Object.getOwnPropertyDescriptor(obj, 'book'); \n" +
                                         "for(var key in desc) { \n" +
                                         "   console.log(key + ':' + desc[key]); \n" +
                                         "}" +
                                         "</pre>";

obj = {};
Object.defineProperty(obj, "book", {
	value: "책",
	writable: true, enumerable: true
});

let desc = Object.getOwnPropertyDescriptor(obj, "book");
for(let key in desc) {
	getOwnPropertyDescriptorBox.innerHTML += "<p> (key:desc[key]) : " + key + ":" + desc[key] + "</p>";
};

//preventExtensions()
preventExtensionsBox = document.getElementById("preventExtensions_result");

preventExtensionsBox.innerHTML += "<p>1. value 속성 사용 했을 경우</p>" +
                                  "<pre style='border:1px solid black; padding: 10px; display: inline-block;'>" +
                                  "let obj = {}; \n" +
                                  "Object.preventExtensions(obj); \n" +
                                  "try { \n" +
                                  "	 Object.defineProperty(obj, 'book', { \n" +
                                  "     value: '책' \n" +
                                  "  });\n" +
                                  "} catch(e) { \n" +
                                  "for(var key in desc) { \n" +
                                  "   console.log('추가 불가'); \n" +
                                  "}" +
                                  "</pre>";

obj = {};
Object.preventExtensions(obj);
try {
	Object.defineProperty(obj, "book", { //프로퍼티 추가 금지가 설정되어서 catch로 넘어감
		value: "책"
	});
} catch(e) {
	preventExtensionsBox.innerHTML += "<p>추가 불가</p>";
}

preventExtensionsBox.innerHTML += "<br>" +
                                  "<p>2. getter, setter 속성 사용 했을 경우</p>" +
                                  "<pre style='border:1px solid black; padding: 10px; display: inline-block;'>" +
                                  "let obj = {}, data = {}; \n" +
                                  "Object.preventExtensions(obj); \n" +
                                  "try { \n" +
                                  "	 Object.defineProperty(obj, 'book', { \n" +
                                  "     set: function(param) { \n" +
                                  "         data.title = param; \n" +
                                  "     }, \n" +
                                  "     get: function(param) { \n" +
                                  "         return data.title; \n" +
                                  "     } \n" +
                                  "  });\n" +
                                  "} catch(e) { \n" +
                                  "for(var key in desc) { \n" +
                                  "   console.log('추가 불가'); \n" +
                                  "}" +
                                  "</pre>";

obj = {}, data = {};
Object.preventExtensions(obj);
try {
	Object.defineProperty(obj, "book", {
		set: function(param) {
            data.title = param;
        },
        get: function() {
            return data.title;
        }
	});
} catch(e) {
	preventExtensionsBox.innerHTML += "<p>추가 불가</p>";
}

//isExtensible()
let isExtensibleBox = document.getElementById("isExtensible_result");

obj = {};
Object.defineProperty(obj, 'book', {
    value: '책'
});

isExtensibleBox.innerHTML += "<pre style='border:1px solid black; padding: 10px; display: inline-block;'>" +
                             "let obj = {}; \n" +
                             "Object.defineProperty(obj, 'book', { \n" +
                             "  value: '책', \n" +
                             "}); \n" +
                             "일 때," +
                             "</pre>" + 
                             "<p> Object.isExtensible(obj) - 설정 전 : " + Object.isExtensible(obj) + "</p>" +
                             "<pre style='border:1px solid black; padding: 10px; display: inline-block;'>" +
                             "Object.preventExtensions(obj);" +
                             "</pre>";
Object.preventExtensions(obj);
isExtensibleBox.innerHTML += "<p> Object.isExtensible(obj) - 설정 후 : " + Object.isExtensible(obj) + "</p>";

//seal()
let sealBox = document.getElementById("seal_result");

sealBox.innerHTML += "<p>1. 추가 금지 예제</p>" + 
                     "<pre style='border:1px solid black; padding: 10px; display: inline-block;'>" +
                     "let obj = {}; \n" +
                     "Object.defineProperty(obj, 'book', { \n" +
                     "  value: '책', writable: true \n" +
                     "}); \n" +
                     "Object.seal(obj); \n" +
                     "try { \n" +
                     "  Obejct.defineProperty(obj, 'sports', { \n" +
                     "      value: '스포츠' \n" +
                     "  } \n" +
                     "} catch(e) { \n" +
                     "  console.log('추가 불가'); \n" +
                     "}" +
                     "</pre>";

obj = {};
Object.defineProperty(obj, "book", {
	value: "책", writable: true
});

Object.seal(obj); //오브젝트에 seal()을 걸었다.
try {
	Object.defineProperty(obj, "sports", { //프로퍼티 추가 금지가 설정되어 있어, catch문으로 넘어간다.
		value: "스포츠"
	});
} catch(e) {
	sealBox.innerHTML += "<p>추가 불가</p>";
}

sealBox.innerHTML += "<br>" +
                     "<p>2. 삭제 금지 예제</p>" +
                     "<pre style='border:1px solid black; padding: 10px; display: inline-block;'>" +
                     "let obj = {}; \n" +
                     "Object.defineProperty(obj, 'book', { \n" +
                     "  value: '책', writable: true \n" +
                     "}); \n" +
                     "Object.seal(obj); \n" +
                     "try { \n" +
                     "  delete obj.book; \n" +
                     "} catch(e) { \n" +
                     "  console.log('삭제 불가'); \n" +
                     "}" +
                     "</pre>";

obj = {};
Object.defineProperty(obj, "book", {
	value: "책", writable: true
});

Object.seal(obj); //오브젝트에 seal()을 걸었다.
try {
	delete obj.book;
} catch(e) {
	sealBox.innerHTML += "<p>삭제 불가</p>";
}

//isSealed()
let isSealedBox = document.getElementById("isSealed_result");

obj = {};
Object.defineProperty(obj, "book", {
	value: "책", writable: true
});

isSealedBox.innerHTML += "<pre style='border:1px solid black; padding: 10px; display: inline-block;'>" +
                         "let obj = {}; \n" +
                         "Object.defineProperty(obj, 'book', { \n" +
                         "  value: '책', writable: true \n" +
                         "}); \n" +
                         "일 때</pre>" +
                         "<p> Object.isSealed(obj) - 설정 전 : " + Object.isSealed(obj) + "</p>" +
                         "<pre style='border:1px solid black; padding: 10px; display: inline-block;'>" +
                         "Object.seal(obj);" +
                         "</pre>";
Object.seal(obj);
isSealedBox.innerHTML += "<p> Object.isSealed(obj) - 설정 후 : " + Object.isSealed(obj) + "</p>";

//freeze()
let freezeBox = document.getElementById("freeze_result");

freezeBox.innerHTML += "<pre style='border:1px solid black; padding: 10px; display: inline-block;'>" +
                       "let obj = {}; \n" +
                       "Object.defineProperty(obj, 'book', { \n" +
                       "  value: '책', writable: true \n" +
                       "}); \n" +
                       "Object.freeze(obj); \n" +
                       "try { \n" +
                       "  Object.defineProperty(obj, 'book', { \n" +
                       "    value: '포인트' \n" +
                       "  }); \n" +
                       "} catch(e) { \n" +
                       "    console.log('변경 불가'); \n" +
                       "};" +
                       "</pre>";

obj = {};
Object.defineProperty(obj, "book", {
	value: "JS책", writable: true
});

Object.freeze(obj);
try {
	Object.defineProperty(obj, "book", {
		value: "포인트"
	});
} catch(e) {
	freezeBox.innerHTML += "<p> 변경 불가 </p>";
};

//isFrozen()
let isFrozenBox = document.getElementById("isFrozen_result");

obj = {};
Object.defineProperty(obj, "book", {
	value: "책",
	writable: true
});

isFrozenBox.innerHTML += "<pre style='border:1px solid black; padding: 10px; display: inline-block;'>" +
                         "let obj = {}; \n" +
                         "Object.defineProperty(obj, 'book', { \n" +
                         "  value: '책', writable: true \n" +
                         "}); \n" +
                         "일 때</pre>" +
                         "<p> Object.isFrozen(obj) - 설정 전 : " + Object.isFrozen(obj) + "</p>" +
                         "<pre style='border:1px solid black; padding: 10px; display: inline-block;'>" +
                         "Object.freeze(obj);" +
                         "</pre>";
Object.freeze(obj);
isFrozenBox.innerHTML += "<p> Object.isFrozen(obj) - 설정 후 : " + Object.isFrozen(obj) + "</p>";
