document.getElementById("lastModified").textContent = document.lastModified;

// Optional JavaScript for additional lazy loading functionality
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll("img[loading='lazy']");
    images.forEach(img => {
        img.onload = () => img.style.opacity = 1;
    });
});
