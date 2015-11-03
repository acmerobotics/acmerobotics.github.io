var select, currentChoice = null;
window.addEventListener("DOMContentLoaded", function() {
  select = document.getElementById("select");
  var changeListener = function() {
    var choice = select.value,
        el = document.getElementById(choice);
    el.className = "";
    if (currentChoice !== null) {
      document.getElementById(currentChoice).className = "hidden";
    }
    currentChoice = choice;
  };
  select.addEventListener("change", changeListener);
  changeListener();
});
