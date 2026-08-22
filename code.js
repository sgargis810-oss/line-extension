
 // make the line reader
 var ruler = document.createElement("div");
 ruler.id = "line-reader-ruler";


 // style said ruler
 ruler.style.position = "fixed";
 ruler.style.width = "100%";
 ruler.style.height = "24px";
 ruler.style.pointerEvents = "none";
 ruler.style.zIndex = "2147483647";
 ruler.style.left = "0px";
 ruler.style.backgroundColor = "rgba(255,255,0,0.5)";


 document.body.append(ruler);


 //color picker 
 var picker = document.createElement("input");
 picker.type = "color";
 picker.id = "line-reader-color-picker";
 picker.value = "#ffff00"; // default yellow


 // style the picker
 picker.style.position = "fixed";
 picker.style.top = "10px";
 picker.style.right = "10px";
 picker.style.zIndex = "2147483647";
 picker.style.width = "40px";
 picker.style.height = "40px";
 picker.style.border = "none";
 picker.style.cursor = "pointer";
 picker.style.outline = "none";
 picker.style.background = "transparent";


 document.body.appendChild(picker);

 var exit = document.createElement("button");
 exit.innerHTML = "X";
 exit.style.position = "fixed";
 exit.style.top = "10px";
 exit.style.right = "60px";
 exit.style.zIndex = "2147483647";
 exit.style.width = "40px";
 exit.style.height = "40px";
 exit.style.border = "none";
 exit.style.color = "red";
 exit.style.borderRadius = "4px";
 exit.style.cursor="pointer";
 document.body.appendChild(exit);


 //update ruler color  
 picker.addEventListener("input", () => {
   // add transparency (80 = ~50% opacity)
   ruler.style.backgroundColor = picker.value + "80";
 });


 //move ruler 
 function moveRuler(mouseEvent) {
   var mousePosition = mouseEvent.clientY;
   var updatePosition = mousePosition - 12;
   ruler.style.top = updatePosition + "px";
 }

 window.__lineReaderMove = moveRuler;
 document.addEventListener("mousemove", moveRuler);

 exit.onclick = function() {
  document.removeEventListener("mousemove", moveRuler);
  ruler.remove();
  picker.remove();
  exit.remove();
 }
