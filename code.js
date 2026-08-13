// Toggle off if already active
var existing = document.getElementById("line-reader-ruler");
var existingPicker = document.getElementById("line-reader-color-picker");


if (existing) {
 existing.remove();
 if (existingPicker) existingPicker.remove();


 if (window.__lineReaderMove) {
   document.removeEventListener("mousemove", window.__lineReaderMove);
   window.__lineReaderMove = null;
 }


} else {


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


 // ⭐ CREATE COLOR PICKER UI ⭐
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


 // ⭐ UPDATE RULER COLOR WHEN USER PICKS A NEW ONE ⭐
 picker.addEventListener("input", () => {
   // add transparency (80 = ~50% opacity)
   ruler.style.backgroundColor = picker.value + "80";
 });


 // ⭐ MOVE RULER WITH MOUSE ⭐
 function moveRuler(mouseEvent) {
   var mousePosition = mouseEvent.clientY;
   var updatePosition = mousePosition - 12;
   ruler.style.top = updatePosition + "px";
 }


 window.__lineReaderMove = moveRuler;
 document.addEventListener("mousemove", moveRuler);
}
