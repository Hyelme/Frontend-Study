//abs()
let absBox = document.getElementById("abs_result");

absBox.innerHTML += "<p>Math.abs(-123) : " + Math.abs(-123) + "<p>" +
                    "<p>Math.abs(-Infinity) : " + Math.abs(-Infinity) + "<p>";

//floor()
let floorBox = document.getElementById("floor_result");

floorBox.innerHTML += "<p>Math.floor(5.3) : " + Math.floor(5.3) + "</p>" +
                      "<p>Math.floor(-1.7) : " + Math.floor(-1.7) + "</p>" +
                      "<p>Math.floor(-1.0) : " + Math.floor(-1.0) + "</p>";

//ceil()
let ceilBox = document.getElementById("ceil_result");

ceilBox.innerHTML += "<p>Math.floor(5.1) : " + Math.floor(5.1) + "</p>" +
                     "<p>Math.floor(-1.7) : " + Math.floor(-1.7) + "</p>" +
                     "<p>Math.floor(-0.3) : " + Math.ceil(-0.3) + "</p>";

//round()
let roundBox = document.getElementById("round_result");

roundBox.innerHTML += "<p>Math.round(5.1) : " + Math.floor(5.1) + "</p>" +
                      "<p>Math.round(5.5) : " + Math.floor(5.5) + "</p>" +
                      "<p>Math.round(-1.6) : " + Math.floor(-1.6) + "</p>" +
                      "<p>Math.round(-1.3) : " + Math.floor(-1.3) + "</p>";

//max()
let maxBox = document.getElementById("max_result");

maxBox.innerHTML += "<p>Math.round(5, 3, 9) : " + Math.floor(5, 3, 9) + "</p>" +
                    "<p>Math.round(6, 3, &#34;AB&#34;) : " + Math.floor(6, 3, "AB") + "</p>";

//min()
let minBox = document.getElementById("min_result");

minBox.innerHTML += "<p>Math.round(5, 3, 9) : " + Math.floor(5, 3, 9) + "</p>" +
                    "<p>Math.round(4, 2, &#34;AB&#34;) : " + Math.floor(4, 2, "AB") + "</p>";

//pow()
let powBox = document.getElementById("pow_result");

powBox.innerHTML += "<p>Math.pow(10, 2) : " + Math.pow(10, 2) + "</p>" +
                    "<p>Math.pow(10, 0) : " + Math.pow(10, 0) + "</p>" +
                    "<p>Math.pow(&#34;A&#34;, 0) : " + Math.pow("A", 0) + "</p>" +
                    "<p>Math.pow(&#34;A&#34;, 1) : " + Math.pow("A", 1) + "</p>" +
                    "<p>Math.pow(2, &#34;A&#34;) : " + Math.pow(2, "A") + "</p>" +
                    "<p>Math.pow(1) : " + Math.pow(1) + "</p>";

//random()
let randomBox = document.getElementById("random_result");

randomBox.innerHTML += "<p> Math.random() : " + Math.random() + "</p>" +
                      "<p> Math.random() : " + Math.random() + "</p>";