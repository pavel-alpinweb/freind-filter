export function secret() {
  
  document.body.addEventListener("click", e => {
    console.log(e.target);
    if (e.target.classList.contains("save")) {
      alert("Подсказка: ты уже на верном пути.");
      console.log(e.target);
    }
  });


//     var ball = document.querySelector('.friends-filter');

//     ball.onmousedown = function(e) {

//     var coords = getCoords(ball);
//     var shiftX = e.pageX - coords.left;
//     var shiftY = e.pageY - coords.top;
  
//     ball.style.position = 'absolute';
//     document.body.appendChild(ball);
//     moveAt(e);
  
//     ball.style.zIndex = 1000; // над другими элементами
  
//     function moveAt(e) {
//       ball.style.left = e.pageX - shiftX + 'px';
//       ball.style.top = e.pageY - shiftY + 'px';
//     }
  
//     document.onmousemove = function(e) {
//       moveAt(e);
//     };
  
//     ball.onmouseup = function() {
//       document.onmousemove = null;
//       ball.onmouseup = null;
//     };
  
//   }
  
//   ball.ondragstart = function() {
//     return false;
//   };
  
//   function getCoords(elem) {   // кроме IE8-
//     var box = elem.getBoundingClientRect();
//     return {
//       top: box.top + pageYOffset,
//       left: box.left + pageXOffset
//     };
//   }
  
}
