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