var squares = document.querySelectorAll(".stk-square");
var icons = document.querySelectorAll(".contact-icon");
(function() {
  for (var el of squares) {
    el.addEventListener("mouseenter", function() {
      var color = this.getAttribute("color");
      if (color === "white" || color === "yellow") {
        this.style.color = "darkslategrey";
      } else {
        this.style.color = "white";
      }
      this.style.border = "4px solid transparent";
      this.style.backgroundColor = color;
    });
  }

  for (var el of icons) {
    el.addEventListener("mouseenter", function() {
      var color = this.getAttribute("color");
      this.style.color = color;
    });
    el.addEventListener("mouseleave", function() {
      this.style.color = "#555152";
    });
  }
})();
