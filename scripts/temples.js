document.getElementById("hamburger").addEventListener("click", function () {
    const navLinks = document.querySelector(".nav-links");
    const hamburger = document.querySelector("#hamburger");
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");

});
