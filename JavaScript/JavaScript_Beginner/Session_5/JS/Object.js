let propBox = document.getElementById("property_result");

propBox.innerHTML += "<p> 프로퍼티 형태 </p>";

propBox.innerHTML += "<pre> var book = { <br>" +
                     "  title : '책', <br>" + 
                     "  point : { <br>" + 
                     "      ten : 10, <br>" +
                     "      bonus : 200, <br>" + 
                     "      promotion: function(){} <br>" + 
                     "  } <br>" + 
                     "} </pre>";


//for ~ in문
let forInBox = document.getElementById("forIn_result");

var sports = {
    soccer : "축구",
    baseball : "야구"
}

for(var item in sports) {
    forInBox.innerHTML += "<p> key : " + item + ", value : " + sports[item] + "</p>";
}