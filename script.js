// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var enter1 = document.getElementById("enter1");
enter1.onclick = function() {
  enter1.style.display = "none";
}

var enter2 = document.getElementById("enter2");
enter2.onclick = function() {
  enter2.style.display = "none";
}

var living1 = document.getElementById("living1");
living1.onclick = function() {
  living1.style.display = "none";
}
