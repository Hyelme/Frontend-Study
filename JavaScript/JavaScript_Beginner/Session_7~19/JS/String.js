let toStringBox = document.getElementById("toString_result");

var result = toString(123);
toStringBox.innerHTML += "<p> var result = toString(123) => " + result + "</p>";
debugger;

result = toString();
toStringBox.innerHTML += "<p> var result = toString({key:123}) => " + result + "</p>";

debugger;