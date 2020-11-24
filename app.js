const grad = document.getElementById("gradient"),
text = document.getElementById("text"),
  name = document.getElementById("name"),
  colors = [],
  back = document.getElementById("back");
  function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
    function newC() {
        fetch("./data.json")
        .then((response) => response.json())
        .then((data) => {
            var cString = "";
            text.innerHTML = "";
            const n = getRandomInt(data.length);
            for (i = 0; i < data[n].colors.length; i++) {
        cString += data[n].colors[i];
        cString += ", ";
        tex(data[n].colors[i]);
    }
    name.innerHTML = data[n].name ;
    cString = cString.substr(0, cString.length - 2);
    grad.style.background = "linear-gradient(90deg, " + cString + ")";
    colors.push(n);
    document.querySelectorAll('#color').forEach(el => {
        el.addEventListener("click", function(){
            Clipboard_CopyTo(el.textContent);
            
        })
    })
});
}
function getBack() {
    if(colors.length > 1){
        fetch("./data.json")
        .then((response) => response.json())
        .then((data) => {
            var cString = "";
            text.innerHTML = "";
            
            for (i = 0; i < data[colors[colors.length - 2]].colors.length; i++) {
                cString += data[colors[colors.length - 2]].colors[i];
              cString += ", ";
              tex(data[colors[colors.length - 2]].colors[i]);
            }
            name.innerHTML =data[colors[colors.length - 2]].name
            data[colors[colors.length - 2]].name + colors[colors.length - 2];
            cString = cString.substr(0, cString.length - 2);
            grad.style.background = "linear-gradient(90deg, " + cString + ")";
            colors.splice(colors.length - 1);
            document.querySelectorAll('#color').forEach(el => {
                el.addEventListener("click", function(){
                    Clipboard_CopyTo(el.textContent);
                    
                })
            })
          });
        }
    }
function tex(e) {
  const newT = document.createElement("div");
  const newCarre = document.createElement("div");
  const newSpan = document.createElement("span");
  newCarre.setAttribute("id", "carre");
  newT.setAttribute("id", "color");
  newSpan.setAttribute("id", "span");
  newCarre.style.background = e;
  text.appendChild(newT);
  newT.appendChild(newCarre);
  newT.appendChild(newSpan);
  newSpan.innerHTML = e;
}

function Clipboard_CopyTo(value) {
    var tempInput = document.createElement("input");
    var cop = document.createElement("div");
    tempInput.value = value;
    cop.setAttribute("class", "copy")
    cop.setAttribute("id", "copy")
    document.body.appendChild(cop);
    cop.innerHTML = "copied !";
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
}

document.body.onkeyup = function (e) {
    if (e.keyCode == 32) {
        newC();
    }
};
newC();
back.addEventListener("click", getBack);


