document.getElementById("red").onmousemove = function () {
    this.style.transition = "background-color 1s linear";
    this.style.backgroundPosition = "right bottom";
    this.style.backgroundColor = "blue";
}
document.getElementById("red").onmouseleave = function () {
    this.style.backgroundColor = "red";
    this.style.transition = "background-color 1s linear";
}
